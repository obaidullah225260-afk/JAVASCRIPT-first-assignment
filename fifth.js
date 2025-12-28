          function first() {
          //JavaScript Assignment (05)
         //Start Of The Chapter (05)
          //Chapter Name (Math Expressions: Familiar Operaters)
          // Chapter 05 Q (01)
          alert("lets get ready for answers")
           var num$ = 3;
           var num_ = 5;
           var sum$ = num$ + num_;
           document.getElementById('text1').innerHTML = ("<h2>Topic 1: Addition operater</h2>")
          document.getElementById('text2').innerHTML = (`Sum of ${num$} and ${num_} is ${sum$}<br><br>`);
          }
          function sec() {
          // Chapter 05 Q (02)
            let a_val = 10;
            let b_val = 2;
            let subtraction = a_val - b_val;
            let multiplication = a_val * b_val;
            let division = a_val / b_val;
            let modulus = a_val % b_val;
         document.getElementById('text3').innerHTML = ("<h2>Topic 2: Four basic arithmetic operaters</h2><br><br><br><br>") 
         document.getElementById('text4').innerHTML = (`Subtraction: ${subtraction}<br>`);
         document.getElementById('text5').innerHTML = (`Multiplication: ${multiplication}<br>`);
         document.getElementById('text6').innerHTML = (`Division: ${division}<br>`);
         document.getElementById('text7').innerHTML = (`Modulus: ${modulus}<br><br>`);
          }
           function third() {
                // Chapter 05 Q (03)
               document.getElementById('thirdOne').innerHTML = ("<h2>Topic 3: Math expressions</h2>")
               let myVar; 
               document.getElementById('thirdTwo').innerHTML = 
               ("Value after variable declaration is: " + myVar + "<br>"); 

               myVar = 5;
               document.getElementById('thirdThree').innerHTML = ("Initial value: " + myVar + "<br>");

               myVar++;
               document.getElementById('thirdFour').innerHTML = ("Value after increment is: " + myVar + "<br>");

                myVar += 7;
                document.getElementById('thirdFive').innerHTML = ("Value after addition is: " + myVar + "<br>");

                myVar--;
                document.getElementById('thirdSix').innerHTML = ("Value after decrement is: " + myVar + "<br>");

                let remainder = myVar % 3;
           // l. Output the remainder
                document.getElementById('thirdSeven').innerHTML = ("The remainder is: " + remainder + "<br><br>");
           }
          function fourth() {
         // Chapter 05 Q (04)
           let number1 = 5;
           let number2 = 600;
           let sumT = number1 * number2;
           document.getElementById('fourone').innerHTML = ("<h2>Topic 4: Buy movie ticket</h2>")
           document.getElementById('fourtwo').innerHTML = (`Total cost to buy ${number1} 
            tickets to a movie is ${sumT}PKR<br><br>`);
          }
           function fifth() {
          // Chapter 05 Q (05)
          //Table Of 5 
           let num01 = 4;
           let num1 = 1;
           let num2 = 2;
           let num3 = 3;
           let num4 = 4;
           let num5 = 5;
           let num6 = 6;
           let num7 = 7;
           let num8 = 8;
           let num9 = 9;
           let num10 = 10;
      
        //Calculate The Table Of 5
          let sum1 = num01 * num1;
          let sum2 = num01 * num2;
          let sum3 = num01 * num3;
          let sum4 = num01 * num4;
          let sum5 = num01 * num5;
          let sum6 = num01 * num6;
          let sum7 = num01 * num7;
          let sum8 = num01 * num8;
          let sum9 = num01 * num9;
          let sum10 = num01 * num10;
      
        //Let Output Of This Table 
         document.getElementById('five1').innerHTML = ("<h2>Topic 5: Table of four</h2>")
         document.getElementById('five2').innerHTML = (` ${num01} x ${num1} = ${sum1}`);
         document.getElementById('five3').innerHTML = (` ${num01} x ${num2} = ${sum2}`);
         document.getElementById('five4').innerHTML = (` ${num01} x ${num3} = ${sum3}`);
         document.getElementById('five5').innerHTML = (` ${num01} x ${num4} = ${sum4}`);
         document.getElementById('five6').innerHTML = (` ${num01} x ${num5} = ${sum5}`);
         document.getElementById('five7').innerHTML = (` ${num01} x ${num6} = ${sum6}`);
         document.getElementById('five8').innerHTML = (` ${num01} x ${num7} = ${sum7}`);
         document.getElementById('five9').innerHTML = (` ${num01} x ${num8} = ${sum8}`);
         document.getElementById('five10').innerHTML = (` ${num01}  x ${num9} = ${sum9}`);
         document.getElementById('five11').innerHTML = (` ${num01} x ${num10} = ${sum10}`);
           }
         function sixth() {
             // Chapter 05 Q (06)
         // Store a Celsius temperature into a variable
          let celsius = 25;
         // Convert it to Fahrenheit & output "NNoC is NNoF" 
          let fahrenheit1 = (celsius * 9/5) + 32;
          document.getElementById('sixone').innerHTML = ("<h2>Topic 6: Temperature for celsius and fahrenheit</h2>")
          document.getElementById('sixtwo').innerHTML =  (`${celsius} °C is ${fahrenheit1} °F<br>`);
        // Now store a Fahrenheit temperature into a variable
           let fahrenheit3 = 70;
        // Convert it to Celsius & output "NNoF is NNoC"
           let celsiusResult = (fahrenheit3 - 32) * 5/9;
           document.getElementById('sixthree').innerHTML = (` ${fahrenheit3} °F is ${celsiusResult} °C<br><br><br>`);
         }
           function seventh() {
             // Chapter 05 Q (07)
           let item1 = 1;
           let cost1 = 650;
           let quantityofitem1 = 1;
           let totalquantity1 = 3;
           let price2 = 2;
           let item2Price = 100;
           let item2 = 2;
           let cost2 = 300;
           let quantityofitem2 = 2;
           let totalquantity2 = 7;
           let shippingcharges = 100;
           let totalcostorder = 2750;
           document.getElementById('sevenone').innerHTML = ("<h2>Topic 7: Shopping Cart</h2>")
           document.getElementById('seventwo').innerHTML = ("Price of item " + item1 +   " is " + cost1 +  "<br>")
           document.getElementById('seventhree').innerHTML = ("Quantity of item " + quantityofitem1 + " is " + totalquantity1 + " <br>")
           document.getElementById('sevenfour').innerHTML = ("Price of item " + price2 + " is " + item2Price + "<br>")
           document.getElementById('sevenfive').innerHTML = (" Quantity of item " + item2 + " is " + totalquantity2 + "<br>")
           document.getElementById('sevensix').innerHTML = ("Shopping Charges " + shippingcharges + "<br>")
           document.getElementById('sevenseven').innerHTML = ("Total cost of your order is " + totalcostorder + "<br>")
           }
          function eight() {
          // Chapter 05 Q (08)
            let totalmarks = 980;
            let marksobtained = 804;
            let percentage = 100;
            let sumt = marksobtained / totalmarks * percentage; 
             document.getElementById('eightone').innerHTML = ("<h2>Topic 8: Marks Sheet</h2>")
             document.getElementById('eighttwo').innerHTML = ("Total marks: " + totalmarks + "<br>");
             document.getElementById('eightthree').innerHTML = (" Marks obtained: " + marksobtained + "")
              document.getElementById('eightfour').innerHTML = (" Percentage: "  + sumt + "%")
            }
             function nine() {
             // Chapter 05 Q (09)
             let usTopkr = 104.80;
             let sauTopkr = 28;
             let usmul = 10;
             let saumul = 25;
             let num = 7;
             let totalpkr = (usmul * usTopkr) + (saumul * sauTopkr);
             document.getElementById('nineone').innerHTML = ("<h2>Topic 9: Currency in PKR</h2>")
             document.getElementById('ninetwo').innerHTML = ("Total currency in PKR: " + totalpkr + "<br>");
            }
             function ten() {
                // Chapter 05 Q (010)
             let num11 = 10;
             let result1 = (((num11 + 5) * 10) / 2);
            // Output the result
            document.getElementById('tenone').innerHTML = ("<h2>Topic 10: Result of the arithmetic sequence</h2>")
            document.getElementById('tentwo').innerHTML = ("The Result of the arithmetic sequence:" + result1 + "<br>");
             }
            function eleven() {
          // Chapter 05 Q (011)
            let currentyear = 2016;
            let birthdayyear = 1992;
            let yourage = (currentyear - birthdayyear);
             document.getElementById('elevenone').innerHTML = ("<h2>Topic 11: Age Calculator</h2>")
             document.getElementById('eleventwo').innerHTML = ("Current Year: " + currentyear + "<br>" );
             document.getElementById('eleventhree').innerHTML = ("Birth Year:" + birthdayyear + "")
             document.getElementById('elevenfour').innerHTML = ("Your Age is:" + yourage +  "")
            }
          function twelve() {
             // Chapter 05 Q (012)
          //The Geometrizer: Calculate property of circle 
             let radius = 20;
             let PI = 3.142;
             let circumference = (2 * radius * PI)
             let area = (PI * radius * radius);
          
              document.getElementById('twelveone').innerHTML = ("<h2>Topic 12: The Geometrizer</h2>")
              document.getElementById('twelvetwo').innerHTML = ("Radius of a circle: " + radius + "")
              document.getElementById('twelvethree').innerHTML = ("The circumference is:" + circumference + "<br>")
              document.getElementById('twelvefour').innerHTML = (" The area is: " + area + "<br>")
             }
             function thirteen() {
           // Chapter 05 Q (013)
          //The  Lifetime Supply Calculator
            let favoritesnack = "chocolate chip";
            let currentage = 15;
            let maximumday = 65;
            let snackperday = 3;
            let totalsnack = 150;
            let oldage = 65;
           document.getElementById('thirteenone').innerHTML = ("<h2>Topic 13: The Lifetime Supply Calculater</h2>")
           document.getElementById('thirteentwo').innerHTML = ("Favorite Snack: " + favoritesnack + "<br>");
           document.getElementById('thirteenthree').innerHTML = (" Current age: " + currentage + " <br>")
           document.getElementById('thirteenfour').innerHTML = (" Estimate Maximum Age: " + maximumday + "<br>")
           document.getElementById('thirteenfive').innerHTML = (" Amount of snacks per day: " + snackperday + " <br>")
           document.getElementById('thirteensix').innerHTML = ("You will need " + totalsnack + " " + favoritesnack + " to last you until the ripe old age of " + oldage + "<br>")
           //End Of The Chapter (05)
             }