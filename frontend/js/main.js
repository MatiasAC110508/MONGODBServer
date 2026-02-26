import { userAPI } from './api.js';

const userForm = document.getElementById('userForm');
const userList = document.getElementById('userList');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');

const loadUsers = async () => {
    try {
        const users = await userAPI.getAll();
        renderTable(users);
    } catch (err) {
        console.error("Fetch error:", err);
    }
};

const renderTable = (users) => {
    const data = Array.isArray(users) ? users : [];
    if (data.length === 0) {
        userList.innerHTML = `<tr><td colspan="4" class="py-20 text-center text-slate-400 font-medium text-sm">No users found in "accounts" database.</td></tr>`;
        return;
    }

    userList.innerHTML = data.map(user => `
        <tr class="hover:bg-slate-50 transition-colors">
            <td class="px-8 py-5">
                <div class="text-sm font-bold text-slate-700">${user.nombre}</div>
                <div class="text-xs text-slate-400">${user.email}</div>
            </td>
            <td class="px-8 py-5 text-sm font-medium text-slate-500">${user.rol || 'N/A'}</td>
            <td class="px-8 py-5 text-center">
                <span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}">
                    ${user.status || 'Inactive'}
                </span>
            </td>
            <td class="px-8 py-5 text-center space-x-3">
                <button onclick="handleEdit('${user._id}', '${user.nombre}', '${user.email}', '${user.rol}', '${user.status}')" class="text-indigo-600 hover:text-indigo-900 transition-colors"><i class="fa-solid fa-pen-to-square"></i></button>
                <button onclick="handleDelete('${user._id}')" class="text-slate-300 hover:text-red-500 transition-colors"><i class="fa-solid fa-trash-can"></i></button>
            </td>
        </tr>
    `).join('');
};

userForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const id = document.getElementById('userId').value;
    const userData = {
        nombre: document.getElementById('userName').value,
        email: document.getElementById('userEmail').value,
        rol: document.getElementById('userRole').value,
        status: document.getElementById('userStatus').value
    };

    if (id) await userAPI.update(id, userData);
    else await userAPI.create(userData);

    userForm.reset();
    resetUI();
    loadUsers();
});

window.handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this user?")) {
        await userAPI.delete(id);
        loadUsers();
    }
};

window.handleEdit = (id, nombre, email, rol, status) => {
    document.getElementById('userId').value = id;
    document.getElementById('userName').value = nombre;
    document.getElementById('userEmail').value = email;
    document.getElementById('userRole').value = rol;
    document.getElementById('userStatus').value = status;

    submitBtn.innerText = "Update User";
    submitBtn.classList.replace('bg-indigo-600', 'bg-emerald-600');
    cancelBtn.classList.remove('hidden');
    document.getElementById('formTitle').innerText = "Edit User";
};

const resetUI = () => {
    document.getElementById('userId').value = '';
    submitBtn.innerText = "Save User";
    submitBtn.classList.remove('bg-emerald-600');
    submitBtn.classList.add('bg-indigo-600');
    cancelBtn.classList.add('hidden');
    document.getElementById('formTitle').innerText = "Register User";
};

cancelBtn.addEventListener('click', () => {
    userForm.reset();
    resetUI();
});

loadUsers();