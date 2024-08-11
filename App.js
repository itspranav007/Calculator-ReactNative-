
import { useState } from 'react';
import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';





const App = () => {

  const [darkTheme, setdarkTheme] = useState(false);
  const [result, setresult] = useState("NAN");

  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: '#F1F1F1',
    light2: '#F7F7F7',
  };

  const getColor = (light, dark) => darkTheme ? dark : light;

  const getBtnColor = (type) => {
    if (type == 'top') { return 'red' }
    else if (type == 'right') { return 'blue' }
    else {
      return getColor(colors.dark, colors.light)
    }
  }

  const calculate = (title) => {

    if (title == 'C') { setresult(" "); }
    else if (title == 'DL') { setresult(result.substring(0, result.length - 1)) }
    else if (title == '=') {
      const ans = Number(eval(result).toFixed(3).toString())
      setresult(eval(result));
    }//-->The eval() method evaluates or executes an argument. If the argument is an expression, eval() evaluates the expression.
    else setresult(result + title)

  }
  const Btn = ({ title, type }) => (
    <TouchableOpacity
      onPress={() => calculate(title)}
      style={{
        padding: 10,
        borderRadius: 10,
        elevation: 2,
        backgroundColor: getColor(colors.light1, colors.dark1),
        height: 70,
        width: 70,
        marginTop: 20,
        justifyContent: 'space-around',
        marginLeft: 10,
        fontVariant: 'small-caps'
      }}>
      <Text style={{ fontSize: 37, color: 'black', textAlign: 'center', textAlignVertical: 'center', color: getBtnColor(title) }}>{title}</Text>
    </TouchableOpacity>
    /* ({title}) This syntax is used for destructuring the props.
 It means that the component expects a prop named title and you can access it directly as a variable within the component.*/
  )

  return (
    <View style={{ height: '100%', width: '100%', backgroundColor: getColor(colors.light, colors.dark), paddingVertical: 20 }}>
      <Switch value={darkTheme}
        onValueChange={() => setdarkTheme(!darkTheme)}
        thumbColor={getColor(colors.dark, colors.light)}//--->Recives Color
        trackColor={getColor(colors.dark, colors.light)}
      />

      {/*Result Container */}

      <Text style={{ fontSize: 30, color: getColor(colors.dark, colors.light), width: '100%', textAlign: 'right', paddingRight: 20, paddingBottom: 160, fontVariant: 'small-caps' }}>{result}</Text>

      {/*Button */}

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',

        backgroundColor: getColor(colors.light1, colors.dark1),
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        padding: 30

      }}>

        <Btn title="C" type="top" />
        <Btn title="DL" type="top" />
        <Btn title="/" type="top" />
        <Btn title="%" type="top" />

        <Btn title="7" type="number" />
        <Btn title="8" type="number" />
        <Btn title="9" type="number" />
        <Btn title="*" type="right" />

        <Btn title="4" type="number" />
        <Btn title="5" type="number" />
        <Btn title="6" type="number" />
        <Btn title="-" type="right" />

        <Btn title="3" type="number" />
        <Btn title="2" type="number" />
        <Btn title="1" type="number" />
        <Btn title="+" type="right" />

        <Btn title="00" type="number" />
        <Btn title="0" type="number" />
        <Btn title="." type="number" />
        <Btn title="=" type="right" />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default App