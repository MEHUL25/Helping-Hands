

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
      postId :{
            type: String,
            required: true
      },
      city : {
            type : String,
            required: true
      },
      name : {
            type : String,
            required: true
      },
      contact : {
            type : String,
            required: true
      },
      address : {
            type : String,
            required: true
      },
      type : {
            type : String,
            required: true
      },
      description : {
            type : String,
            required: true
      },
      author : {
            type : String,
            required: true
      },
      tdate : {
            type : String,
            required: true
      },
      status : {
            type : String,
            required: true
      }

});

module.exports = mongoose.model('Post',postSchema);

/*

const fs = require('fs');
const path = require('path');

const p = path.join(
      path.dirname(require.main.filename),
      'data',
      'posts.json');

const getPostsFromFile = cb =>{
      
            fs.readFile(p,(err,fileContent)=>{
                  if(err){
                         cb([]);
                  }
                  else
                  {
                        cb(JSON.parse(fileContent));
                  }
            }); 
};




module.exports = class Post {
      constructor(id,title,city,name,contact,address,type,description,author,tdate,status){
            this.id=id;
            this.title = title;
            this.city = city;
            this.name = name;
            this.contact = contact;
            this.address = address;
            this.type = type;
            this.description = description;
            this.author = author;
            this.tdate = tdate;
            this.status = status;
      }
      save(){
            getPostsFromFile(posts => {
                  if (this.id) {
                    const existingPostIndex = posts.findIndex(
                      post => post.id === this.id
                    );
                    const updatedPosts = [...posts];
                    updatedPosts[existingPostIndex] = this;
                    fs.writeFile(p, JSON.stringify(updatedPosts), err => {
                      console.log(err);
                    });
                  } else {
                    this.id = Math.random().toString();
                    posts.push(this);
                    fs.writeFile(p, JSON.stringify(posts), err => {
                      console.log(err);
                    });
                  }
                });
      }
      static fetchAll(cb){
            getPostsFromFile(cb);
      }

      static findById(id,cb) {
            getPostsFromFile(posts=>{
                  const post= posts.find(p=>p.id===id);
                  cb(post);
            })
      }

}

*/
