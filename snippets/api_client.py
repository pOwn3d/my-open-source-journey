import requests
from typing import Optional, Dict, Any

class APIClient:
    def __init__(self, base_url: str, api_key: Optional[str] = None):
        self.base_url = base_url.rstrip('/')
        self.session = requests.Session()
        if api_key:
            self.session.headers['Authorization'] = f'Bearer {api_key}'

    def get(self, endpoint: str, params: Optional[Dict] = None) -> Dict[Any, Any]:
        response = self.session.get(f'{self.base_url}/{endpoint}', params=params)
        response.raise_for_status()
        return response.json()

    def post(self, endpoint: str, data: Dict) -> Dict[Any, Any]:
        response = self.session.post(f'{self.base_url}/{endpoint}', json=data)
        response.raise_for_status()
        return response.json()
