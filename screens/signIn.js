import React from 'react';
import { View, Text, StatusBar, TouchableOpacity, ImageBackground, Image, ScrollView, UIManager, LayoutAnimation, BackHandler  } from 'react-native'
import styles from '../stylesheet/LoginSignup';
import SignupForm from '../components/SignupForm';
import SigninForm from '../components/SignInForm';

export default class Auth extends React.Component {

    static navigationOptions = {
        header: null
    };

    constructor(props)
    {
        super(props);
        this.state = {
            IsOpenTab : 'SignIn',   //  'SignIn', 'SignUp' OR 'ResetPassword'
        };
        UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
        // LayoutAnimation.spring();
    }

    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }
    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        return false;
    };

    render() {

        return (

            <ScrollView style={styles.container} keyboardShouldPersistTaps='always'>

                <StatusBar backgroundColor='#2c8ba6' barStyle='light-content' />

                <View style={styles.TopLogoArea}>

                    <ImageBackground source={require('../assets/Signin.jpg')} style={styles.TopLogoAreaBackground}>

                        <View style={{paddingTop: 20}}>

                            <Image source={require('../assets/Signin.jpg')} resizeMode='contain' style={{width: 150, height: 150,}}/>

                        </View>

                        <View style={{flexDirection:'row'}}>



                                {
                                    this.state.IsOpenTab === 'SignIn' ? <View style={styles.TabArea}><View style={styles.TabActiveArea}><Text style={styles.TabActiveLable}>SIGN IN</Text><View style={styles.TabActiveLine}/></View></View> : <TouchableOpacity onPress={()=>this.NavigateForm('SignIn')} activeOpacity={0.8} style={styles.TabArea}><Text style={styles.TabDeactiveLable}>SIGN IN</Text></TouchableOpacity>
                                }



                            <View style={styles.TabArea}>

                                <Text style={{color:'#2dc7b0', fontWeight:'bold', fontSize: 12}}>OR</Text>

                            </View>



                                {
                                    this.state.IsOpenTab === 'SignUp' ? <View style={styles.TabArea}><View style={styles.TabActiveArea}><Text style={styles.TabActiveLable}>SIGN UP</Text><View style={styles.TabActiveLine}/></View></View> : <TouchableOpacity onPress={()=>this.NavigateForm('SignUp')} activeOpacity={0.8} style={styles.TabArea}><Text style={styles.TabDeactiveLable}>SIGN UP</Text></TouchableOpacity>
                                }



                        </View>

                    </ImageBackground>

                </View>

                <View style={{paddingVertical:40,}}>

                    {
                        this.state.IsOpenTab === 'SignIn' ? <SigninForm navigation={this.props.navigation} /> : <SignupForm  navigation={this.props.navigation} />
                    }

                </View>


            </ScrollView>

        );
    }

    NavigateForm = (method) => {

        const CustomLayoutLinear = {
            duration: 300,
            create: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity,
            },
            update: {
                type: LayoutAnimation.Types.linear,
                property: LayoutAnimation.Properties.opacity,
            },
        };
        LayoutAnimation.configureNext(CustomLayoutLinear );

        if(method === 'SignUp'){
            this.setState({
                IsOpenTab : 'SignUp',
            });
        }else{
            this.setState({
                IsOpenTab : 'SignIn',
            });
        }

    }

}
