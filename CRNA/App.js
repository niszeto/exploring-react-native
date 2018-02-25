import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button, TextInput, Keyboard, Alert ,FlatList } from 'react-native';

const secretPhrase = 'Reddit';

const COMMUNITY_MEMBERS = [
  {
    name: 'Monte Thakkar',
    image: 'https://avatars2.githubusercontent.com/u/7840686?s=400&v=4',
    github_username: 'monte9'
  },
  {
    name: 'Ryan Liszewski',
    image: 'https://avatars3.githubusercontent.com/u/5275250?s=460&v=4',
    github_username: 'ryanliszewski'
  },
  {
    name: 'Thomas Zhu',
    image: 'http://thomaszhu.com/resources/thomas_avatar.jpeg',
    github_username: 'thomashzhu'
  },
  {
    name: 'Bhavesh Chowdhury',
    image: 'https://avatars3.githubusercontent.com/u/13439148?s=460&v=4',
    github_username: 'bhaveshc789'
  },
  {
    name: 'Sukhjit Singh',
    image: 'https://avatars1.githubusercontent.com/u/18251293?s=400&u=1ee2922f2dd90d94bb4efbec7cc815ef510a0ad7&v=4',
    github_username: 'sukhjitsingh'
  },
  {
    name: 'Prakash Gurung',
    image: 'https://avatars.githubusercontent.com/makkhay',
    github_username: 'makkhay'
  },
  {
    name: 'Nicholas Szeto',
    image: 'https://avatars1.githubusercontent.com/u/23561635?s=460&v=4',
    github_username: 'niszeto'
  },
  {
    name: 'Emanuel Saunders',
    image: 'https://scontent-lax3-2.cdninstagram.com/vp/1ee634d2bdf29d5a327858a15ccfdf42/5B26F2E8/t51.2885-19/s150x150/18160691_1198139890329419_5383374010954285056_a.jpg',
    github_username: 'saundemanu'
  },
  {
    name: 'William Hua',
    image: 'https://avatars3.githubusercontent.com/u/36139326?s=460&v=4',
    github_username: 'william-hua'
  },
  {
    name: 'Mitul Savani',
    image: 'https://scontent.fsnc1-1.fna.fbcdn.net/v/t31.0-8/18556546_1553987881278489_849408995015005895_o.jpg?oh=bb65219475a9cbac85ca7090e7ee877b&oe=5ADE398B',
    github_username: 'mitulsavani'
  },
  {
    name: 'Jakhongir Khusanov',
    image: 'https://avatars0.githubusercontent.com/u/25942541?s=460&v=4',
    github_username: 'jkhusanov'
  },
  {
    name: 'Teodora Caneva',
    image: 'https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-1/c44.0.320.320/p320x320/20914645_1579156895438534_1027285013181250707_n.jpg?oh=0ff1b3c4c8bc8e00edb84cecd660d0fe&oe=5B1C897A',
    github_username: 'kodekat'
  },
  {
    name: 'Affaan Ghazzali',
    image: 'https://avatars0.githubusercontent.com/u/32111151?s=460&v=4',
    github_username: 'affaanghazzali'
  },
  {
    name: 'Girish Rawat',
    image: 'https://avatars2.githubusercontent.com/u/6697235?s=460&v=4',
    github_username: 'GirishRawat'
  },
  {
    name: 'Karan Gupta',
    image: 'https://avatars1.githubusercontent.com/u/19352928?s=460&v=4',
    github_username: 'karanguptak9'
  }
]

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      backgroundColor: '#6E6D75',
      phrase: '',
    };
  }

  handleClick = () => {
    const randomColor = '#'+ Math.floor(Math.random()* 16777215).toString(16);

    this.setState({
      backgroundColor: randomColor
    })
  }

  handleSubmit = () => {
    Keyboard.dismiss
    if(this.state.phrase === secretPhrase){
      this.correctAlert();
    }else{
      this.incorrectAlert();
    }
  }

  correctAlert = () => {
    Alert.alert(
      'Correct',
      'You know the phrase',
      [
        { text: 'OK', onPress: () => console.log('OK pressed') }
      ],
      { cancelable: false }
    )
  }

  incorrectAlert = () => {
    Alert.alert(
      'Incorrect',
      "The phrase is Reddit",
      [
        { text: 'Try again', onPress: () => console.log('Try again pressed') }
      ],
      { cancelable: false }
    )
  }

  renderMembersRow(member){
    return(
      <View
        style={styles.rowContainer}
        key={member}
      >
        <Image
          source={{ url: member.image }} style={styles.avatar}
        />

        <Text style={styles.nameLabel}>{member.name}</Text>

        <Text style={styles.gitHubUserNameLabel}>@{member.github_username}</Text>

      </View>
    )
  }


  render() {
    return (
      // ScrollView - Flex column
      <ScrollView 
        style={styles.scrollView}
        onPress={Keyboard.dismiss}
      >
        
        {/* bigImageContainer - Flex row */}
        <View style={styles.bigImageContainer}>
          <Image 
          source={require('./assets/images/Batman.png')}
          style={styles.bigImage}
          />
        </View>

        <View style={styles.smallImageContainer}>
          <Image 
            source={require('./assets/images/NightWing.png')}
            style={styles.smallImage}
          />

          <Image 
            source={require('./assets/images/BatmanBeyond.png')}
            style={styles.smallImage}
          />
        </View>


        <View 
        style={styles.toggleContainer}
        backgroundColor={this.state.backgroundColor}
        >
          <Button 
          style={styles.toggleButton}
          title='Change Background Color'
          color='#063A68'
          onPress={this.handleClick}
          />
        </View>

        
        <View 
        style={styles.textInputContainer}
        >   
          <TextInput
            style={styles.textInput}
            onChangeText={(phrase) => this.setState({phrase})}
            placeholder='Enter Secret Word'
            placeholderTextColor='#052E59'
            underlineColorAndroid='transparent'
            value={this.state.phrase}
          
            // call handle submit to display an alert
            onSubmitEditing={() => this.handleSubmit()}
          />
        </View>

        <View style={styles.listViewContainer}>
          <FlatList
            //display community memebers data 

            data={COMMUNITY_MEMBERS}
            keyExtractor={(item,index) => index}
            renderItem={({item}) => this.renderMembersRow(item)}
            
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView:{
    backgroundColor: '#0E0E0C',
    flexDirection: 'column',
  },

  bigImageContainer:{
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
  },

  bigImage:{
    flex:1,
  },

  smallImageContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#08447B',
  },

  smallImage:{
    height: 150,
    width: 150,
    borderRadius:75,
    borderWidth: 2,
    borderColor: 'white',
  },

  toggleContainer: {
    height: 300,
    justifyContent: 'center',
  },
  
  toggleButton:{
    flex:1,
  },

  textInputContainer:{
    flex:1,
    margin: 50,
    justifyContent: 'center',
  },

  textInput:{
    textAlign: 'center',
    height: 50,
    borderWidth: 2,
    borderColor: '#FF5722',
    borderRadius: 20,
    backgroundColor: '#FFFFFF'
  },
  
  listViewContainer:{
    marginBottom: 50,
    justifyContent:'center',
    // backgroundColor:'#DA72E7'
  },

  rowContainer:{
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    backgroundColor: '#A7A2A8',
    borderTopWidth: 1,
    borderColor: 'black'
  },

  avatar:{
    height: 40,
    width: 40,
    borderRadius: 20,
    marginLeft: 10
  },

  nameLabel: {
    fontSize: 18,
    color: '#052E59',
    marginLeft: 10,
    fontWeight: 'bold'
  },
  
  gitHubUserNameLabel: {
    flex: 1,
    textAlign: 'right',
    fontSize: 15,
    color: '#052E59',
    marginRight: 20
}

});
