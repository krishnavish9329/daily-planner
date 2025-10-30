# API CURL Examples

## Register User

### Register a new user:
```bash
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: application/json" \
  -d "{\"name\":\"John Doe\",\"email\":\"john@example.com\",\"password\":\"password123\"}"
```

### Expected Success Response:
```json
{
  "message": "User registered successfully",
  "userId": "...",
  "email": "john@example.com",
  "name": "John Doe"
}
```

### Error Response (User already exists):
```json
{
  "error": "User with this email already exists"
}
```

---

## Login User

### Login with credentials:
```bash
curl -X POST http://localhost:3000/api/login \
  -H "Content-Type: application/json" \
  -d "{\"email\":\"john@example.com\",\"password\":\"password123\"}"
```

### Expected Success Response:
```json
{
  "message": "Login successful",
  "user": {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "..."
  }
}
```

### Error Response (Invalid credentials):
```json
{
  "error": "Invalid email or password"
}
```

---

## Test Commands (Windows PowerShell)

### Register:
```powershell
curl.exe -X POST http://localhost:3000/api/register -H "Content-Type: application/json" -d '{\"name\":\"John Doe\",\"email\":\"john@example.com\",\"password\":\"password123\"}'
```

### Login:
```powershell
curl.exe -X POST http://localhost:3000/api/login -H "Content-Type: application/json" -d '{\"email\":\"john@example.com\",\"password\":\"password123\"}'
```

---

## Test Commands (Windows CMD)

### Register:
```cmd
curl -X POST http://localhost:3000/api/register -H "Content-Type: application/json" -d "{\"name\":\"John Doe\",\"email\":\"john@example.com\",\"password\":\"password123\"}"
```

### Login:
```cmd
curl -X POST http://localhost:3000/api/login -H "Content-Type: application/json" -d "{\"email\":\"john@example.com\",\"password\":\"password123\"}"
```

