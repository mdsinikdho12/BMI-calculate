function CalculateBmi(){
    const weight = parseFloat(document.getElementById("InputWeight").value);
    const height = parseFloat(document.getElementById("Inputheight").value);
    const ResultDiv = document.getElementById("result");

    if(isNaN(weight) || weight <=0 ){
        ResultDiv.innerText ="ভাই আপনার সঠিক ওজন দিন!😒 ";
        return

    }
    if (isNaN(height) || height <= 0) {
        ResultDiv.innerText = "ভাই উচ্চতা ঠিক মত দিন !🤬";
        return
    }
    let Newheight = height * 0.3048;
    const BMI = weight / (Newheight * Newheight);

    if (BMI < 18.5) {
        ResultDiv.innerText = "আপনার BMI: " + BMI.toFixed(2);
        ResultDiv.style.fontSize = "14px"; 
        ResultDiv.innerText += "\n\nআপনি Underweight। BMI বাড়ানোর জন্য:\n" +
            "- নিয়মিত বেশি ক্যালোরি যুক্ত খাবার খান\n" +
            "- প্রোটিন গ্রহণ করুন\n" +
            "- ব্যায়াম করুন\n" +
            "- পর্যাপ্ত ঘুম নিশ্চিত করুন।";
        return
    }
    else if (BMI >= 18.5 && BMI <= 24.9) {
        ResultDiv.innerText = "আপনার BMI: " + BMI.toFixed(2);
   
        ResultDiv.style.fontSize = "14px";
        ResultDiv.innerText += "\n\n✅ আপনি একদম স্বাভাবিক আছেন! চালিয়ে যান এইভাবে!";
        return
    } 
    else if (BMI >= 25 && BMI <= 29.9) {
        ResultDiv.innerText = "আপনার BMI: " + BMI.toFixed(2);
        ResultDiv.style.color = "red"; 
        ResultDiv.style.fontSize = "14px"; 
        ResultDiv.innerText += "\n\n⚠️ আপনি Overweight। \n\nটিপস:\n" +
            "- সুস্থ ডায়েট মেনে চলুন।\n" +
            "- নিয়মিত ব্যায়াম করুন।\n" +
            "- চিনি ও ফাস্টফুড কমান।";

        return
    } 
    else if (BMI >= 30) {
        ResultDiv.innerText = "আপনার BMI: " + BMI.toFixed(2);
        ResultDiv.style.fontSize = "12px"; 
        ResultDiv.innerText += "\n\n🚨 আপনি Obesity (মোটাপনা) অবস্থায় আছেন। \n\nটিপস:\n" +
            "- ডাক্তার এর পরামর্শ নিন।\n" +
            "- স্বাস্থ্যকর জীবনযাপন শুরু করুন।\n" +
            "- ব্যায়াম এবং হেলদি ডায়েট ফলো করুন।";
        return
    }
    
    else{
        ResultDiv.style.fontSize = "18px"; 
    }
    
    ResultDiv.innerText = "আপনার BMI: " + BMI.toFixed(2);
    return BMI

}