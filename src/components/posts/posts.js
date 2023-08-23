import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as postsActions from "../../redux/actions/postsActions";
//import Carousel from 'react-bootstrap/Carousel';

const Posts = (props) => {
    const [posts, setPosts] = useState([]);
    const [images, setImages] = useState([])
    useEffect(() => {
        if(props.posts.length === 0){
            props.loadPosts().catch((error) => {
                alert("Loading Posts Failed : " + error);
            })
        }else{
            setPosts(props.posts)
            let images_temp = [];
            props.posts.map(post => {
                let temp = [];
                post.images.map(image => {
                    import(`../../images/upload_posts/${image}`)
                    .then(image => {
                        temp = [...temp , image.default]
                        let foundIndex = images_temp.findIndex(element => element.id === post.id)
                        images_temp.splice(foundIndex, 1)
                        images_temp = [...images_temp, {id: post.id, temp}]
                        console.log(images_temp)
                    }).catch(error => {
                        console.log(error)
                    })   
                })
                
            })
            setImages(images_temp)
        }
    }, [props.posts])
    
    
    
  return (
    <>
        {/*About the work and projects*/} 
        {console.log(images)}
        <div className="site-section" id="works">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-7 mx-auto text-center">
                        <h2 className="heading-29190">Our Projects</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    {posts && posts.map((post, index) => {
                        return(
                            <div className="col-lg-4 col-md-6 mb-4" key={index}>
                                <div className="post-entry-1 h-100 post-entry-design">
                                    <div className="post-entry-image">
                                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
                                            <div className="carousel-inner size-max">
                                                
                                               
                                                {console.log("Images for Post " + post.id + " : "+post.images)}
                                               
                                                
                                                
                                            </div>
                                        </div>
                                    </div>
                                    <div className="post-entry-1-contents" style={{zIndex:"2", position:"relative", overflow:"scroll"}}>
                                        <h2><a>{post.title}</a></h2>
                                        <span className="meta d-inline-block mb-3" style={{width: "100%"}}>{post.date0}<div className="float-right primary make-inline"><a>{post.place}</a></div>
                                        </span>
                                        <p>{post.content}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                        
                </div>

                <div className="row">
                    <div className="col-md-10"></div>
                    <div className="col-md-2 text-center more-btn">
                        <a href="#">see more...</a>
                    </div>
                </div>
            </div>
        </div> 
        {/* END .site-section */}

    </>
  )}

Posts.propTypes = {
    loadPosts:  PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
}

  function mapStateToProps(state) {
    return {  
      posts: state.posts,
    };
  }
  const mapDispatchToProps = {
    loadPosts: postsActions.loadPosts,
    
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Posts);
  