import json
import os
import psycopg2


def handler(event: dict, context) -> dict:
    """Приём заявок на заказ букета от посетителей сайта Цветы России"""

    headers = {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
    }

    if event.get("httpMethod") == "OPTIONS":
        return {"statusCode": 200, "headers": headers, "body": ""}

    if event.get("httpMethod") == "GET":
        conn = psycopg2.connect(os.environ["DATABASE_URL"])
        cur = conn.cursor()
        cur.execute("SELECT id, name, phone, message, created_at FROM orders ORDER BY created_at DESC")
        rows = cur.fetchall()
        cur.close()
        conn.close()
        orders = [
            {"id": r[0], "name": r[1], "phone": r[2], "message": r[3], "created_at": str(r[4])}
            for r in rows
        ]
        return {"statusCode": 200, "headers": headers, "body": json.dumps({"orders": orders}, ensure_ascii=False)}

    body = json.loads(event.get("body") or "{}")
    name = (body.get("name") or "").strip()
    phone = (body.get("phone") or "").strip()
    message = (body.get("message") or "").strip()

    if not name or not phone:
        return {
            "statusCode": 400,
            "headers": headers,
            "body": json.dumps({"error": "Имя и телефон обязательны"}, ensure_ascii=False),
        }

    conn = psycopg2.connect(os.environ["DATABASE_URL"])
    cur = conn.cursor()
    cur.execute(
        "INSERT INTO orders (name, phone, message) VALUES (%s, %s, %s) RETURNING id",
        (name, phone, message),
    )
    order_id = cur.fetchone()[0]
    conn.commit()
    cur.close()
    conn.close()

    return {
        "statusCode": 200,
        "headers": headers,
        "body": json.dumps({"success": True, "id": order_id}, ensure_ascii=False),
    }
