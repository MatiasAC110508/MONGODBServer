const API_URL = "http://localhost:5000/api/users";

export const userAPI = {
    // Obtain all the users (READ)
    async getAll () {
        const res = await fetch(API_URL);
        return await res.json()
    },
    
    // Create a user (CREATE)
    async create(userData) {
        const res = await fetch(API_URL, {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(userData)
        });
        return await res.json()
    },

    // Update a user (UPDATE) 
    async update(id, userData) {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'PUT',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(userData)
        });
        return await res.json();
    },

    // Delete a user (DELETE)
    async delete(id) {
        const res = await fetch(`${API_URL}/${id}`, {
            method: 'DELETE'
        });
        return await res.json();
    }        
};
