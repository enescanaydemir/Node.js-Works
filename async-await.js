const posts = [
    { name: 'Post 1', title: 'Post Title 1' },
    { name: 'Post 2', title: 'Post Title 2' },
    { name: 'Post 3', title: 'Post Title 3' }
];

const newPost = { name: 'Yakup Kul', title: 'Post Title 4' };


function listPosts(postsData) {
    return new Promise((resolve, reject) => {
        console.log('Postlar Listeleniyor..')

        if (postsData) {
            console.log('Post Listelendi!')
            resolve(posts)
        } else {
            reject('Postlar Listelenemedi!')
        }
    })
}

function addPost(newPost) {
    return new Promise((resolve, reject) => {
        console.log('Ekstra Post Ekleniyor...')

        if (newPost) {
            posts.push(newPost)
            resolve('Ekstra Post Eklendi!')
        } else {
            reject('Ekstra Post Eklenemedi!!')
        }
    })
}


async function showPosts() {
    try {
        let listedPosts = await listPosts(true);
        console.log(listedPosts);

        let addedPost = await addPost(newPost);
        console.log(addedPost);

        console.log(await listPosts(true))


    } catch (error) {
        console.log(error)
    }
}

showPosts();