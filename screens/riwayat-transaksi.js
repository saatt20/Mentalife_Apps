import React, { useState, useEffect } from "react";
import { Box, ScrollView, Text } from "native-base";
import firebase from "firebase/compat";
import { Header } from "../components";

const RiwayatTransaksi = () => {
    const [paymentHistory, setPaymentHistory] = useState([]);
  
    useEffect(() => {
      // Fetch payment history data when the component mounts
      fetchPaymentHistory();
    }, []);
  
    const fetchPaymentHistory = () => {
      const paymentRef = firebase.database().ref("payment");
  
      paymentRef.once("value")
        .then((snapshot) => {
          const data = snapshot.val();
          if (data) {
            // Convert the object of payment entries into an array
            const paymentArray = Object.values(data);
            setPaymentHistory(paymentArray);
          }
        })
        .catch((error) => {
          console.error("Error fetching payment history data: ", error);
        });
    };
  
    return (
        <>
        <Header title={"Kembali"} withBack={true}  />
        <ScrollView>
        <Box>
        <Box bgColor={"info.100"}>
        <Text fontWeight="bold" fontSize={18} p={4}>Riwayat Transaksi</Text>
        </Box>
        
      <Box >
        {paymentHistory.map((payment, index) => (
          <Box key={index} borderBottomWidth={4} borderColor="info.200" p={3}>
            <Text fontSize={"md"}>{payment.itemName}</Text>
            <Text fontSize={"md"}>{payment.itemJob}</Text>
            <Text fontSize={"md"}>{payment.itemPrice}</Text>
          </Box>
        ))}
      </Box>
      </Box>
      </ScrollView>
      </>
    );
  };
  
  export default RiwayatTransaksi;
  