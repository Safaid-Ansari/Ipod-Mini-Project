import React from 'react';

class Settings extends React.Component{
    
    render(){
        return(
            <div style={styles.settings} >

                <div style={styles.titleBar}>
                        <p style={{fontWeight:'bold'}}>iPod</p>
                        <img style={styles.battery} src="data:image/png;base64,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" alt="error"></img>
                </div>
                <div style={{width : '100%' , height : '90%',display:'flex' , flexDirection : 'row' , backgroundColor:"darkseagreen", justifyContent: 'center'}}>
                    <img style={styles.image} src="data:image/png;base64,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"  alt='error'/>
                </div>
            </div>
        );
    }
    
}

const styles = {
    settings : {
        width : '100%',
        height : '100%',
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        flexWrap : 'wrap'
    },
    image : {
        width:'65%',
        height:'65%',
        alignSelf : 'center',
        borderRadius: "50%"
    },
    titleBar : {
        height:'10%',
        width:'100%',
        borderRadius:'12px 0 0 0',
        backgroundImage: 'linear-gradient(0deg, rgb(123, 132, 140), transparent)',
        borderBottom: '1px solid #6c757d',
        padding : '1px 5px 10px 8px',
        display:'flex',
        flexDirecton : 'row',
        justifyContent : 'space-between'

    },
    battery :{
        width : '20px',
        height: '20px',
    }
}

export default Settings;