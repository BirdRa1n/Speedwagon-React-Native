import { StyleSheet, View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Input, Icon } from 'react-native-elements';

const Stack = createNativeStackNavigator();


function HomeScreen({ navigation }) {
    return (
        <View style={stylesPage1.primaryView}>
            <View>
                <Image style={stylesPage1.imgCarro} source={require('./img/carro.png')}></Image>
            </View>
            <View style={stylesPage1.TextView}>
                <Text style={stylesPage1.TextViewChild}>Compra ou venda de carros usados</Text>
            </View>
            <View style={stylesPage1.ButtonView}>
                <Button
                    buttonStyle={stylesPage1.Button}
                    title="Catálogo"
                    titleStyle={stylesPage1.titleStyle}
                    onPress={() => navigation.navigate('Catalogo')}
                />
            </View>
        </View>
    );
}

function Catalogo({ navigation }) {
    function Card() {
        return (
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={stylesCatalogo.scrowVerticalStyle}>
                <TouchableOpacity onPress={() => navigation.navigate('VeiculoPage')}>
                    <View style={stylesCatalogo.card}>
                        <Image style={stylesCatalogo.imgCard} source={require('./img/image.png')}></Image>
                        <Text style={stylesCatalogo.TitleCard}>Tesla Model Y</Text>
                        <View style={stylesCatalogo.stateView}>
                            <Text style={stylesCatalogo.stateCar}>Usado 2 anos</Text></View>
                        <View style={stylesCatalogo.priceView}>
                            <Text style={stylesCatalogo.textPrice}>64.000.00</Text></View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('VeiculoPage')}>
                    <View style={stylesCatalogo.card}>
                        <Image style={stylesCatalogo.imgCard} source={require('./img/image.png')}></Image>
                        <Text style={stylesCatalogo.TitleCard}>Tesla Model Y</Text>
                        <View style={stylesCatalogo.stateView}>
                            <Text style={stylesCatalogo.stateCar}>Usado 2 anos</Text></View>
                        <View style={stylesCatalogo.priceView}>
                            <Text style={stylesCatalogo.textPrice}>64.000.00</Text></View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('VeiculoPage')}>
                    <View style={stylesCatalogo.card}>
                        <Image style={stylesCatalogo.imgCard} source={require('./img/image.png')}></Image>
                        <Text style={stylesCatalogo.TitleCard}>Tesla Model Y</Text>
                        <View style={stylesCatalogo.stateView}>
                            <Text style={stylesCatalogo.stateCar}>Usado 2 anos</Text></View>
                        <View style={stylesCatalogo.priceView}>
                            <Text style={stylesCatalogo.textPrice}>64.000.00</Text></View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('VeiculoPage')}>
                    <View style={stylesCatalogo.card}>
                        <Image style={stylesCatalogo.imgCard} source={require('./img/image.png')}></Image>
                        <Text style={stylesCatalogo.TitleCard}>Tesla Model Y</Text>
                        <View style={stylesCatalogo.stateView}>
                            <Text style={stylesCatalogo.stateCar}>Usado 2 anos</Text></View>
                        <View style={stylesCatalogo.priceView}>
                            <Text style={stylesCatalogo.textPrice}>64.000.00</Text></View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('VeiculoPage')}>
                    <View style={stylesCatalogo.card}>
                        <Image style={stylesCatalogo.imgCard} source={require('./img/image.png')}></Image>
                        <Text style={stylesCatalogo.TitleCard}>Tesla Model Y</Text>
                        <View style={stylesCatalogo.stateView}>
                            <Text style={stylesCatalogo.stateCar}>Usado 2 anos</Text></View>
                        <View style={stylesCatalogo.priceView}>
                            <Text style={stylesCatalogo.textPrice}>64.000.00</Text></View>
                    </View>
                </TouchableOpacity>
            </ScrollView>

        );
    }
    return (
        <View style={{ height: 1800 }}>
            <View style={stylesCatalogo.primaryView}>
                <Image style={stylesCatalogo.logo}
                    source={require('./img/logo.png')}
                ></Image>
                <View style={stylesCatalogo.viewSeach}>
                    <TextInput placeholder='Buscar' style={stylesCatalogo.InputSeach}></TextInput>
                    <Icon
                        name='search'
                        type='font-awesome'
                        color='#CCCCCC'
                        iconStyle={{ top: 4, left: 13, width: 40 }}
                    />
                </View>
            </View>


            <View style={{ backgroundColor: '#F3FDFB', height: '100%' }}>
                <View style={{
                    flexDirection: 'row', backgroundColor: '#e0e8e7', height: 40, alignItems: 'center', shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 30,
                    elevation: 2,
                }}>
                    <View style={stylesCatalogo.itemBar}><Text style={{ fontSize: 15, top: 2 }}>Novos</Text></View>
                    <View style={stylesCatalogo.itemBar}><Text style={{ fontSize: 15, top: 2 }}>Usados</Text></View>
                    <View style={stylesCatalogo.itemBar}><Text style={{ fontSize: 15, top: 2 }}>Preço ↑</Text></View>
                    <View style={stylesCatalogo.itemBar}><Text style={{ fontSize: 15, top: 2 }}>Preço ↓</Text></View>



                </View>


                <View style={{ top: 0 }}>
                    <ScrollView style={{ height: 510 }}>
                        <View>
                            {Card()}
                            {Card()}
                            {Card()}
                            {Card()}
                            {Card()}
                            {Card()}
                        </View>

                    </ScrollView>
                </View>









            </View>


        </View>
    );
}

function VeiculoPage({ navigation }) {
    return (
        <View style={{
            backgroundColor: '#F3FDFB', alignItems: 'center', height: 60, shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 2
            },
            shadowOpacity: 0.25,
            shadowRadius: 5,
        }}>
            <View style={{ flexDirection: 'row', marginRight: 140 }}>
                <TouchableOpacity onPress={() => navigation.navigate('Catalogo')}>
                    <Icon
                        name='chevron-left'
                        type='font-awesome'
                        color='#CCCCCC'
                        iconStyle={{ top: 18, left: 0, right: 20, height: 54, width: 22 }}
                    />
                </TouchableOpacity >
                <Text style={{ fontSize: 25, top: 15, left: 90 }}>Tesla Model Y</Text>
                <Image
                    style={{ width: 50, height: 30, left: '258%', top: 15 }}
                    source={require('./img/logo.png')}
                ></Image>
            </View>

            <View style={{
                backgroundColor: '#DCEAE7', height: 400, top: 60, borderRadius: 5, shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 2
                },
                shadowOpacity: 0.25,
                shadowRadius: 5,
                marginBottom: 140
            }}>
                <View>
                    <Image
                        style={{ width: 340, height: 200, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
                        source={require('./img/image.png')}
                    ></Image>
                </View>

                <View style={{ left: 9, top: 5 }}>
                    <Text style={{ fontSize: 16.1, color: '#080E2C' }}>Ano:</Text>
                    <Text style={{ fontSize: 16.1, color: '#CCCCCC' }}>XXX</Text>

                    <Text style={{ fontSize: 16.1, color: '#080E2C' }}>IPVA pago:</Text>
                    <Text style={{ fontSize: 16.1, color: '#CCCCCC' }}>XXX</Text>

                    <Text style={{ fontSize: 16.1, color: '#080E2C' }}>Km rodados:</Text>
                    <Text style={{ fontSize: 16.1, color: '#CCCCCC' }}>XXX</Text>

                    <Text style={{ fontSize: 16.1, color: '#080E2C' }}>Complementar: </Text>
                    <Text style={{ fontSize: 16.1, color: '#CCCCCC' }}>XXX</Text>


                </View>
            </View>
            <View style={{ width: '100%', top: '32%' }}>
                <Button
                    buttonStyle={{ backgroundColor: '#44EABB', height: 55 }}
                    title="Entrar em contato"
                    titleStyle={{ color: '#080E2C', fontSize: 20 }}
                    onPress={() => navigation.navigate('Catalogo')}
                />
            </View>
        </View>
    );
}



export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Catalogo" component={Catalogo} />
                <Stack.Screen name="VeiculoPage" component={VeiculoPage} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
const stylesCatalogo = StyleSheet.create({
    primaryView: { width: '100%', height: 121.8, backgroundColor: '#44EABB', alignItems: 'center' },
    logo: { width: 50, height: 30, left: '38%', top: 25 },
    viewSeach: {
        flexDirection: 'row',
        width: '94%',
        height: '29%',
        backgroundColor: '#fff',
        left: '0%',

        top: '10%',
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 2,

    },
    InputSeach: {
        width: '87%',
        height: 30,
        top: 2,
        left: 12
    },
    card: {
        top: 10,
        width: 184,
        height: 240,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        }, shadowOpacity: 0.25, shadowRadius: 3, marginLeft: 15
    },
    imgCard: { width: '100%', height: 160, borderTopRightRadius: 10, borderTopLeftRadius: 10 },
    TitleCard: { fontSize: 23.74, color: '#080E2C', marginLeft: 3 },
    stateCar: { fontSize: 10.83, color: '#393E56', top: 1, marginLeft: 3, },
    stateView: { width: 80, backgroundColor: '#F7F7F7', borderRadius: 2, left: 6, },
    priceView: { left: '62.0%', top: 12.5, backgroundColor: '#7CF0CF', width: 70, height: 27, alignItems: 'center', borderTopLeftRadius: 5, borderBottomRightRadius: 10 },
    textPrice: { fontSize: 13, top: 2, marginBottom: 2 },
    scrowVerticalStyle: { width: '100%', flexDirection: 'row', marginBottom: 10, height: 255 },
    itemBar: {
        left: '60%', width: 60, backgroundColor: '#EEEDEC', borderRadius: 5, alignItems: 'center', height: 25, marginRight: 30, shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 2,
    }


})

const stylesPage1 = StyleSheet.create({
    imgCarro: {
        width: 273,
        height: 141,
        top: '110%'
    },
    primaryView: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F3FDFB'
    },
    TextView: {
        width: 312, height: 100, top: '25%',
    },
    TextViewChild: {
        fontSize: 38, color: '#080E2C',...Platform.select({
            ios: { fontFamily: 'Arial', }, 
            android: { fontFamily: 'Roboto' }
       })
    },
    ButtonView: {
        width: '100%', top: '56%',...Platform.select({
            ios: { fontFamily: 'Arial', }, 
            android: { fontFamily: 'Roboto' }
       })
    },
    Button: { backgroundColor: '#44EABB', height: 55 },
    titleStyle: {
        color: '#080E2C', fontSize: 20, ...Platform.select({
            ios: { fontFamily: 'Arial', }, 
            android: { fontFamily: 'Roboto' }
       })
    }
});