const API_URL = "http://localhost:500/api/users";
const userForm = document.getElementById('userForm');
const userList = document.getElementById('userList');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');

// 1. Obtain and show  users (READ)

const fetchUsers = async () => {
    try {
        const res = await fetch(API_URL);
        const users = await res.json();
        renderUsers(users);
    } catch (err) {
        console.error("Error loading the users: ", err);
    }
};

const renderUsers = (users) => {
    userList.innerHTML = users.map(user => `
        <tr class="hover:bg-slate-50 transition">
            <td class="px-6 py-4">
                <div class="text-sm font-bold text-slate-700">${user.nombre}</div>
                <div class="text-xs text-slate-400">${user.email}</div>
            </td>
            <td class="px-6 py-4 text-center space-x-2">
                <button onclick="editUser('${user._id}', '${user.nombre}', '${user.email}')" 
                    class="text-indigo-600 hover:text-indigo-900 text-xs font-bold uppercase">Editar</button>
                <button onclick="deleteUser('${user._id}')" 
                    class="text-red-500 hover:text-red-800 text-xs font-bold uppercase">Eliminar</button>
            </td>
        </tr>
    `).join('');
};

// 2. Create or update
userForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('userId').value;
    const userData = {
        nombre: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value
    };

    const method = id ? 'PUT' : 'POST';
    const url = id ? `${API_URL}/${id}` : API_URL;

    await fetch(url, {
        method,
        headers: {'Content-Type': 'application/josn'},
        body: JSON.stringify(userData)
    });
})