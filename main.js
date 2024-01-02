//Print 1 to 100;if number divisible by 3 print "Bizz"---or number id divisible by 5 print "Buzz" or number is divided by both 3 and 5 print "Bizz Buzz"

for(i=1;i<=100;i++){
    if ((i%3==0)&&(i%5==0)) {
        document.write("Bizz Buzz"+"<br>")
    }

    else if (i%3==0) {
        document.write("Bizz"+"<br>")
    }

    else if (i%5==0) {
        document.write("Buzz"+"<br>")
    }
    else{
        document.write(i+"<br>")
    }
}