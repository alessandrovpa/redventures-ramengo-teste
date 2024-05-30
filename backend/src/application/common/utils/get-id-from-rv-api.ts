async function getIdFromRVApi(): Promise<string> {
  const response = await fetch(
    'https://api.tech.redventures.com.br/orders/generate-id',
    {
      method: 'post',
      headers: {
        'x-api-key': 'ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf',
      },
    },
  ).then((res) => res.json());

  return response.orderId;
}

export { getIdFromRVApi };
