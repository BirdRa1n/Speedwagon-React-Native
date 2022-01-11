import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Image, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { Button, Input } from 'react-native-elements';
import { ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';
function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#F3FDFB' }}>
            <View>
                <Image
                    style={styles.imgCarro}
                    source={require('./img/carro.png')}
                ></Image>
            </View>
            <View style={{ width: 312, height: 100, top: '25%' }}>
                <Text
                    style={{ fontSize: 38, fontFamily: 'Arial', color: '#080E2C' }}
                >Compra ou venda de carros usados</Text>
            </View>
            <View style={{ width: '100%', top: '56%' }}>
                <Button
                    buttonStyle={{ backgroundColor: '#44EABB', height: 55 }}
                    title="Catálogo"
                    titleStyle={{ color: '#080E2C', fontSize: 20 }}
                    onPress={() => navigation.navigate('Catalogo')}
                />
            </View>
        </View>
    );
}

function Catalogo({ navigation }) {
    return (
        <View>
            <View style={{ width: '100%', height: 121.8, backgroundColor: '#44EABB', alignItems: 'center' }}>
                <Image
                    style={{ width: 50, height: 30, left: '38%', top: 25 }}
                    source={require('./img/logo.png')}

                ></Image>
                <View style={{
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
                    shadowRadius: 30,
                    elevation: 2,

                }}>

                    <TextInput placeholder='Buscar' style={{ width: '87%', height: 30, top: 3, left: 4 }}></TextInput>
                    <Icon
                        name='search'
                        type='font-awesome'
                        color='#CCCCCC'
                        iconStyle={{ top: 4, left: 0 }}
                    />
                </View>
            </View>


            <View style={{ backgroundColor: '#F3FDFB', }}>
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
                    <View style={{ left: '60%', width: 60, backgroundColor: '#EEEDEC', borderRadius: 5, alignItems: 'center', height: 25, marginRight: 30 }}><Text style={{ fontSize: 15, top: 2 }}>Novos</Text></View>
                    <View style={{ left: '60%', width: 60, backgroundColor: '#EEEDEC', borderRadius: 5, alignItems: 'center', height: 25, marginRight: 30 }}><Text style={{ fontSize: 15, top: 2 }}>Usados</Text></View>
                    <View style={{ left: '60%', width: 60, backgroundColor: '#EEEDEC', borderRadius: 5, alignItems: 'center', height: 25, marginRight: 30 }}><Text style={{ fontSize: 15, top: 2 }}>Preço ↑</Text></View>
                    <View style={{ left: '60%', width: 60, backgroundColor: '#EEEDEC', borderRadius: 5, alignItems: 'center', height: 25 }}><Text style={{ fontSize: 15, top: 2 }}>Preço ↓</Text></View>



                </View>


                <View style={{ top: 10 }}>
                    <ScrollView horizontal={false} style={{ height: '100%' }}
                    >


                        <ScrollView showsHorizontalScrollIndicator={false}
                            horizontal={true} style={{ height: 250, width: '100%', flexDirection: 'row' }}>

                            <TouchableOpacity onPress={() => navigation.navigate('VeiculoPage')}>
                                <View style={{
                                    top: 10, width: 184, height: 240, backgroundColor: '#fff', borderRadius: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    }, shadowOpacity: 0.25, shadowRadius: 30, marginLeft: 15
                                }}>
                                    <Image style={{ width: '100%', height: 160, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
                                        source={require('./img/image.png')}></Image>
                                    <Text style={{ fontSize: 23.74, color: '#080E2C', marginLeft: 3 }}>
                                        Tesla Model Y</Text>
                                    <Text style={{ fontSize: 10.83, color: '#393E56', top: 1, marginLeft: 3 }}>Usado 2 anos</Text>
                                    <View style={{ left: '62.0%', top: 12.5, backgroundColor: '#7CF0CF', width: 70, height: 27, alignItems: 'center', borderTopLeftRadius: 5, borderBottomRightRadius: 10 }}>
                                        <Text style={{ fontSize: 13, top: 5 }}>64.000.00</Text></View>
                                </View>
                            </TouchableOpacity>



                            <TouchableOpacity onPress={() => navigation.navigate('VeiculoPage')}>
                                <View style={{
                                    top: 10, width: 184, height: 240, backgroundColor: '#fff', borderRadius: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    }, shadowOpacity: 0.25, shadowRadius: 30, marginLeft: 15
                                }}>
                                    <Image style={{ width: '100%', height: 160, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
                                        source={require('./img/image.png')}></Image>
                                    <Text style={{ fontSize: 23.74, color: '#080E2C', marginLeft: 3 }}>
                                        Tesla Model Y</Text>
                                    <Text style={{ fontSize: 10.83, color: '#393E56', top: 1, marginLeft: 3 }}>Usado 2 anos</Text>
                                    <View style={{ left: '62.0%', top: 12.5, backgroundColor: '#7CF0CF', width: 70, height: 27, alignItems: 'center', borderTopLeftRadius: 5, borderBottomRightRadius: 10 }}>
                                        <Text style={{ fontSize: 13, top: 5 }}>64.000.00</Text></View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('VeiculoPage')}>
                                <View style={{
                                    top: 10, width: 184, height: 240, backgroundColor: '#fff', borderRadius: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    }, shadowOpacity: 0.25, shadowRadius: 30, marginLeft: 15
                                }}>
                                    <Image style={{ width: '100%', height: 160, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
                                        source={require('./img/image.png')}></Image>
                                    <Text style={{ fontSize: 23.74, color: '#080E2C', marginLeft: 3 }}>
                                        Tesla Model Y</Text>
                                    <Text style={{ fontSize: 10.83, color: '#393E56', top: 1, marginLeft: 3 }}>Usado 2 anos</Text>
                                    <View style={{ left: '62.0%', top: 12.5, backgroundColor: '#7CF0CF', width: 70, height: 27, alignItems: 'center', borderTopLeftRadius: 5, borderBottomRightRadius: 10 }}>
                                        <Text style={{ fontSize: 13, top: 5 }}>64.000.00</Text></View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('VeiculoPage')}>
                                <View style={{
                                    top: 10, width: 184, height: 240, backgroundColor: '#fff', borderRadius: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    }, shadowOpacity: 0.25, shadowRadius: 30, marginLeft: 15
                                }}>
                                    <Image style={{ width: '100%', height: 160, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
                                        source={require('./img/image.png')}></Image>
                                    <Text style={{ fontSize: 23.74, color: '#080E2C', marginLeft: 3 }}>
                                        Tesla Model Y</Text>
                                    <Text style={{ fontSize: 10.83, color: '#393E56', top: 1, marginLeft: 3 }}>Usado 2 anos</Text>
                                    <View style={{ left: '62.0%', top: 12.5, backgroundColor: '#7CF0CF', width: 70, height: 27, alignItems: 'center', borderTopLeftRadius: 5, borderBottomRightRadius: 10 }}>
                                        <Text style={{ fontSize: 13, top: 5 }}>64.000.00</Text></View>
                                </View>
                            </TouchableOpacity>


                        </ScrollView>

                        <ScrollView horizontal={true} style={{ height: 250, width: '100%', flexDirection: 'row' }}>


                            <TouchableOpacity onPress={() => navigation.navigate('VeiculoPage')}>
                                <View style={{
                                    top: 10, width: 184, height: 240, backgroundColor: '#fff', borderRadius: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    }, shadowOpacity: 0.25, shadowRadius: 30, marginLeft: 15
                                }}>
                                    <Image style={{ width: '100%', height: 160, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
                                        source={require('./img/image.png')}></Image>
                                    <Text style={{ fontSize: 23.74, color: '#080E2C', marginLeft: 3 }}>
                                        Tesla Model Y</Text>
                                    <Text style={{ fontSize: 10.83, color: '#393E56', top: 1, marginLeft: 3 }}>Usado 2 anos</Text>
                                    <View style={{ left: '62.0%', top: 12.5, backgroundColor: '#7CF0CF', width: 70, height: 27, alignItems: 'center', borderTopLeftRadius: 5, borderBottomRightRadius: 10 }}>
                                        <Text style={{ fontSize: 13, top: 5 }}>64.000.00</Text></View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('VeiculoPage')}>
                                <View style={{
                                    top: 10, width: 184, height: 240, backgroundColor: '#fff', borderRadius: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    }, shadowOpacity: 0.25, shadowRadius: 30, marginLeft: 15
                                }}>
                                    <Image style={{ width: '100%', height: 160, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
                                        source={require('./img/image.png')}></Image>
                                    <Text style={{ fontSize: 23.74, color: '#080E2C', marginLeft: 3 }}>
                                        Tesla Model Y</Text>
                                    <Text style={{ fontSize: 10.83, color: '#393E56', top: 1, marginLeft: 3 }}>Usado 2 anos</Text>
                                    <View style={{ left: '62.0%', top: 12.5, backgroundColor: '#7CF0CF', width: 70, height: 27, alignItems: 'center', borderTopLeftRadius: 5, borderBottomRightRadius: 10 }}>
                                        <Text style={{ fontSize: 13, top: 5 }}>64.000.00</Text></View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('VeiculoPage')}>
                                <View style={{
                                    top: 10, width: 184, height: 240, backgroundColor: '#fff', borderRadius: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    }, shadowOpacity: 0.25, shadowRadius: 30, marginLeft: 15
                                }}>
                                    <Image style={{ width: '100%', height: 160, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
                                        source={require('./img/image.png')}></Image>
                                    <Text style={{ fontSize: 23.74, color: '#080E2C', marginLeft: 3 }}>
                                        Tesla Model Y</Text>
                                    <Text style={{ fontSize: 10.83, color: '#393E56', top: 1, marginLeft: 3 }}>Usado 2 anos</Text>
                                    <View style={{ left: '62.0%', top: 12.5, backgroundColor: '#7CF0CF', width: 70, height: 27, alignItems: 'center', borderTopLeftRadius: 5, borderBottomRightRadius: 10 }}>
                                        <Text style={{ fontSize: 13, top: 5 }}>64.000.00</Text></View>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => navigation.navigate('VeiculoPage')}>
                                <View style={{
                                    top: 10, width: 184, height: 240, backgroundColor: '#fff', borderRadius: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    }, shadowOpacity: 0.25, shadowRadius: 30, marginLeft: 15
                                }}>
                                    <Image style={{ width: '100%', height: 160, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
                                        source={require('./img/image.png')}></Image>
                                    <Text style={{ fontSize: 23.74, color: '#080E2C', marginLeft: 3 }}>
                                        Tesla Model Y</Text>
                                    <Text style={{ fontSize: 10.83, color: '#393E56', top: 1, marginLeft: 3 }}>Usado 2 anos</Text>
                                    <View style={{ left: '62.0%', top: 12.5, backgroundColor: '#7CF0CF', width: 70, height: 27, alignItems: 'center', borderTopLeftRadius: 5, borderBottomRightRadius: 10 }}>
                                        <Text style={{ fontSize: 13, top: 5 }}>64.000.00</Text></View>
                                </View>
                            </TouchableOpacity>


                        </ScrollView>




                        <ScrollView horizontal={true} style={{ height: 250, width: '100%', flexDirection: 'row' }}>


                            <TouchableOpacity onPress={() => navigation.navigate('VeiculoPage')}>
                                <View style={{
                                    top: 10, width: 184, height: 240, backgroundColor: '#fff', borderRadius: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    }, shadowOpacity: 0.25, shadowRadius: 30, marginLeft: 15
                                }}>
                                    <Image style={{ width: '100%', height: 160, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
                                        source={require('./img/image.png')}></Image>
                                    <Text style={{ fontSize: 23.74, color: '#080E2C', marginLeft: 3 }}>
                                        Tesla Model Y</Text>
                                    <Text style={{ fontSize: 10.83, color: '#393E56', top: 1, marginLeft: 3 }}>Usado 2 anos</Text>
                                    <View style={{ left: '62.0%', top: 12.5, backgroundColor: '#7CF0CF', width: 70, height: 27, alignItems: 'center', borderTopLeftRadius: 5, borderBottomRightRadius: 10 }}>
                                        <Text style={{ fontSize: 13, top: 5 }}>64.000.00</Text></View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('VeiculoPage')}>
                                <View style={{
                                    top: 10, width: 184, height: 240, backgroundColor: '#fff', borderRadius: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    }, shadowOpacity: 0.25, shadowRadius: 30, marginLeft: 15
                                }}>
                                    <Image style={{ width: '100%', height: 160, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
                                        source={require('./img/image.png')}></Image>
                                    <Text style={{ fontSize: 23.74, color: '#080E2C', marginLeft: 3 }}>
                                        Tesla Model Y</Text>
                                    <Text style={{ fontSize: 10.83, color: '#393E56', top: 1, marginLeft: 3 }}>Usado 2 anos</Text>
                                    <View style={{ left: '62.0%', top: 12.5, backgroundColor: '#7CF0CF', width: 70, height: 27, alignItems: 'center', borderTopLeftRadius: 5, borderBottomRightRadius: 10 }}>
                                        <Text style={{ fontSize: 13, top: 5 }}>64.000.00</Text></View>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('VeiculoPage')}>
                                <View style={{
                                    top: 10, width: 184, height: 240, backgroundColor: '#fff', borderRadius: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    }, shadowOpacity: 0.25, shadowRadius: 30, marginLeft: 15
                                }}>
                                    <Image style={{ width: '100%', height: 160, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
                                        source={require('./img/image.png')}></Image>
                                    <Text style={{ fontSize: 23.74, color: '#080E2C', marginLeft: 3 }}>
                                        Tesla Model Y</Text>
                                    <Text style={{ fontSize: 10.83, color: '#393E56', top: 1, marginLeft: 3 }}>Usado 2 anos</Text>
                                    <View style={{ left: '62.0%', top: 12.5, backgroundColor: '#7CF0CF', width: 70, height: 27, alignItems: 'center', borderTopLeftRadius: 5, borderBottomRightRadius: 10 }}>
                                        <Text style={{ fontSize: 13, top: 5 }}>64.000.00</Text></View>
                                </View>
                            </TouchableOpacity>


                            <TouchableOpacity onPress={() => navigation.navigate('VeiculoPage')}>
                                <View style={{
                                    top: 10, width: 184, height: 240, backgroundColor: '#fff', borderRadius: 10, shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2
                                    }, shadowOpacity: 0.25, shadowRadius: 30, marginLeft: 15
                                }}>
                                    <Image style={{ width: '100%', height: 160, borderTopRightRadius: 10, borderTopLeftRadius: 10 }}
                                        source={require('./img/image.png')}></Image>
                                    <Text style={{ fontSize: 23.74, color: '#080E2C', marginLeft: 3 }}>
                                        Tesla Model Y</Text>
                                    <Text style={{ fontSize: 10.83, color: '#393E56', top: 1, marginLeft: 3 }}>Usado 2 anos</Text>
                                    <View style={{ left: '62.0%', top: 12.5, backgroundColor: '#7CF0CF', width: 70, height: 27, alignItems: 'center', borderTopLeftRadius: 5, borderBottomRightRadius: 10 }}>
                                        <Text style={{ fontSize: 13, top: 5 }}>64.000.00</Text></View>
                                </View>
                            </TouchableOpacity>


                        </ScrollView>

                    </ScrollView>
                </View>









            </View>


        </View>
    );
}

function VeiculoPage({ navigation }) {
    return (
        <View style={{ backgroundColor: '#F3FDFB', alignItems: 'center' }}>
            <View style={{flexDirection: 'row', marginRight: 140}}>
                <TouchableOpacity onPress={() => navigation.navigate('Catalogo')}>
            <Icon
                name='chevron-left'
                type='font-awesome'
                color='#CCCCCC'
                iconStyle={{ top: 18, left: 0, right: 20, height: 54, width: 22 }}
            />
            </TouchableOpacity >
            <Text style={{fontSize: 25, top: 15, left: 90}}>Tesla Model Y</Text>
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
                shadowRadius: 30,
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

const styles = StyleSheet.create({
    //primeira paguina
    imgCarro: {
        width: 273,
        height: 141,
        top: '110%'
    },


    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },


});