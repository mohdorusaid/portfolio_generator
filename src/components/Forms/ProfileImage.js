import { storage } from '../../config/fbConfig';
import React from 'react';
import Button from '@material-ui/core/Button';
import './ProfileImage.css';
import '../Mastersheet.css';
import ImageUploader from 'react-images-upload';
import { CircularProgress } from '@material-ui/core'

class ProfileImage extends React.Component{
    state={
        image:'',
        url:'',
        uploading: false
    }

    goToNextStep=(e)=>{
        e.preventDefault();
        this.props.nextStep();
    }

    goToPreviousStep=(e)=>{
        e.preventDefault();
        this.props.prevStep();
    }

    handleFile=(picture)=>{
        console.log(picture);
        //TODO: ERROR HANDLING AND CHECK TYPE
            const image= picture[0]; 
            var storageRef= storage.ref('images/'+this.props.authId+'.png');
            var newStorageRef=storage.ref('images/'+this.props.authId+'_300x300.png')
            storageRef.put(image).then(()=>{
                storageRef.getDownloadURL().then((url)=>{
                    //Waiting For New Resized
                    this.setState({
                        uploading: true
                    })
                    setTimeout(()=>{
                        newStorageRef.getDownloadURL().then((newURL)=>{
                            this.props.handlePicture(newURL);
                            this.setState({
                                uploading: false
                            })
                        }).catch((err)=>{
                            console.log(err)
                        })
                    },5000)                  
                }).catch((err)=>{
                    this.setState({
                        err
                    })
                })
            })
            }


    render(){
        const { photoURL } = this.props.values;
        console.log(this.state);
        return(
            <div className="center">
                <h1>Identify Yourself!</h1>
                <h3>Upload A Picture.</h3>
                {(photoURL.length > 0)?(
                    <div>
                    <h1>Your Picture</h1>
                    <img src={photoURL} width="40%" height="40%"/>
                    </div>
                ):(
                    null
                )}
                {(this.state.uploading)?(
                    <div>
                    <CircularProgress />
                    <h5>Uplaoding Picture</h5>
                    </div>
                ):(
                    null
                )}
                <ImageUploader
                withIcon={true}
                buttonText='Choose images'
                onChange={this.handleFile}
                imgExtension={['.jpg', '.png']}
                maxFileSize={5242880}
                singleImage={true}
            />
                {(this.state.err)?(
                    <h1>{this.state.err.message}</h1>
                ):(
                    null
                )}
                <span>
                <Button onClick={this.goToPreviousStep}>Previous</Button>
                <Button onClick={this.goToNextStep}>Next</Button>
                </span>
                
            </div>
        )
    }
}




export default (ProfileImage);

/*

 const image= picture[0]; 
                const uploadTask=storage.ref(`images/${this.props.authId}/${image.name}`).put(image);
                uploadTask.on('state_changed',(snapshot)=>{
                    //progress
                    console.log(snapshot);
                },
                (error)=>{
                    console.log(error)
                },()=>{
                    //complete 
                    storage.ref('images').child(image.name).getDownloadURL().then(url=>{
                       this.props.handlePicture(url);
                    })
                })


*/