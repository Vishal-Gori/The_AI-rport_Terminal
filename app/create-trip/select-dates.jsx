import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

export default function SelectDates() {
  const navigation = useNavigation();
  const [startDate, setStartDate]=useState();
  const [endDate, setEndDate]=useState();
  const {tripData, setTripData}=useContext(CreateTripContext);

  useEffect(()=>{
    navigation.setOptions({
        headerShown: true,
        headerTransparent: true,
        headerTitle:''
    })
  })
  const onDateChange=(date, type)=>{
    console.log(date, type)
    if(type === 'START_DATE'){
        setStartDate(moment(date));
    }else{
        setEndDate(moment(date)); 
    }
  }
  const onDateSelectionContinue=()=>{
    if(startDate&&endDate){
        const totalNoOfDays=endDate.diff(startDate,'days')
        console.log("totaldays"+ totalNoOfDays+1)
        setTripData(...tripData, {
            startDate:startDate,
            endDate:endDate,
            totalDays: totalNoOfDays+1
        })
    }else{
        ToastAndroid.show('please select start and end date', ToastAndroid.LONG)
    }
  }
  return (
    <View style={{
        padding: 25,
        paddingTop: 75,
        backfaceVisibility: Colors.WHITE,
        height: '100%',
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 35,
        marginTop: 20,
      }}>select-dates</Text>
      <View style={{
        marginTop: 30,

      }}>
      <CalendarPicker allowBackwardRangeSelect={true} minDate={new Date()} maxRangeDuration={5} onDateChange={onDateChange} />
      </View>
      <TouchableOpacity style={{
        padding:15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginTop :20
      }}>
        <Link href={'/create-trip/select-dates'}>
        <Text style={{
          textAlign: "center",
          color:Colors.WHITE,
          fontFamily:'outfit-medium',
          fontSize:20
        }}>Continue</Text>
        </Link>
      </TouchableOpacity>
    </View>
  )
}