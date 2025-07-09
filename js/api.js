fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(users => {
const container = document.getElementById("data");
users.forEach(user => {
    container.innerHTML += `
    <div class="user">
        <h3>${user.name}</h3>
        <p><strong>Username:</strong> ${user.username}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Phone:</strong> ${user.phone}</p>
        <p><strong>City:</strong> ${user.address.city}</p>
    </div>
    `;
});
});

// --
// 1- يستخدم لجلب ال البيانات من ال Api
// 2- يحول الذي تم جلبه من ال Api الي Response الي Json
// 3- بعد تحويل الي json يتم تمريرها الي داله user
// 4- يبحث عن ال id الذي يوجد في الصفحة
// 5- يضع كل مستخدم في صفه
// 6- يضيف داخل عنصر data
//    1- user.name
//    2- user.username
//    3- user.email
//    4- user.phone
//    5- user.address.city