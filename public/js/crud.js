document.getElementById('create-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const id = document.getElementById('create-id').value;
    const name = document.getElementById('create-name').value;
    const response = await fetch('/data', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: parseInt(id), name: name })
    });
    const result = await response.text();
    alert(result);
    refreshData();
});

document.getElementById('update-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const id = document.getElementById('update-id').value;
    const name = document.getElementById('update-name').value;
    const response = await fetch(`/data/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: parseInt(id), name: name })
    });
    const result = await response.text();
    alert(result);
    refreshData();
});

document.getElementById('delete-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const id = document.getElementById('delete-id').value;
    const response = await fetch(`/data/${id}`, {
        method: 'DELETE'
    });
    const result = await response.text();
    alert(result);
    refreshData();
});

document.getElementById('refresh-data').addEventListener('click', refreshData);

async function refreshData() {
    const response = await fetch('/data');
    const data = await response.json();
    document.getElementById('data-display').textContent = JSON.stringify(data, null, 2);
}
