const apiBasePath = "http://api.programmerlab.com/api/v1";

const getHeaders = token => {
  try {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    if (token) {
      headers.append("Authorization", `Bearer ${token}`);
    }
    return headers;
  } catch (error) {
    console.log("Error in header", error);
  }
};

const getApiEndPoint = apiEndPoint => {
  return apiBasePath + apiEndPoint;
};

export const makeRequest = async (url, method, data, token) => {
  const body = data ? JSON.stringify(data) : undefined;
  try {
    const token =
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6Ly9hcGkucHJvZ3JhbW1lcmxhYi5jb20vYXBpL3YxL3VzZXIvbG9naW4iLCJpYXQiOjE1MzE1Nzg3NzAsImV4cCI6MTg5MTU3ODc3MCwibmJmIjoxNTMxNTc4NzcwLCJqdGkiOiJuWnBaQTRveFk1WWg2QjhLIn0.zlG5GWlVPYDKS35ZqZbughLtJu7deVx8JvIQ4mIBUQo";
    const request = new Request(getApiEndPoint(url), {
      headers: getHeaders(token),
      method,
      body
    });
    const response = await fetch(request);
    return response.json();
  } catch (error) {
    console.log("Request Failed", error);
  }
};
