body {
  font-family: Arial;
  background: linear-gradient(135deg, #eef2ff, #f5f5f5);
  text-align: center;
  margin: 0;
  padding: 20px;
}

#list {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.tool {
  width: 90%;
  max-width: 600px;
  background: white;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: 0.3s;
}

.name {
  font-weight: bold;
}

button {
  padding: 6px 10px;
  border: none;
  border-radius: 8px;
  background: #4CAF50;
  color: white;
  cursor: pointer;
}

a {
  text-decoration: none;
  color: #333;
}
