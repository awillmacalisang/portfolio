export const login = async (username, password) => {
    const res = await fetch('http://headless.local//wp-json/jwt-auth/v1/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
  
    const data = await res.json();
    return data.token;
  };