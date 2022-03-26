const posts = [
    { name: 'Post 1', title: 'Post Title 1' },
    { name: 'Post 2', title: 'Post Title 2' },
    { name: 'Post 3', title: 'Post Title 3' }
];

const newPost = { name: 'Post 4', title: 'Post Title 4' };


function listPosts(postsData) {
    return new Promise((resolve, reject) => {
        console.log('Postlar Listeleniyor..')

        if (postsData) {
            resolve('Postlar Listelendi!')
        } else {
            reject('Postlar Listelenemedi!')
        }
    })
}

function addPost(newPost) {
    return new Promise((resolve, reject) => {
        console.log('Yeni Post Ekleniyor...')

        if (newPost) {
            resolve('Yeni Post Eklendi!')
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


    } catch (error) {
        console.log(error)
    }
}

showPosts();