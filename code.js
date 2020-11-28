$(document).ready(
    function() {
        // Object containing the validation rules
        var myRules =
            {
                numSalary:
                    {
                        min: 30000,
                        max: 300000,
                        digits: true

                    },
                numCreditScore:
                    {
                        min: 300,
                        max: 850,
                        digits: true
                    },
                numMonths:
                    {
                        min: 6,
                        max: 120,
                        digits: true
                    }

            };

        // Object containing the error messages
        var myMessages =
            {
                numSalary:
                    {
                        min: "too small",
                        max: "too large",
                        digits: "Please enter your salary in dollars no commas,"
                    },

                numCreditScore:
                    {
                        min: "too small",
                        max: "too large",
                        digits: "Please enter your credit score between 300-850."
                    },
                numMonths:
                    {
                        min:"too small",
                        max: "too large",
                        digits: "Please enter your months of employment."
                    }
            };

        // Pass the configuration to the form's validate() method
        // Needs submitHandler, rules, and messages properties
        $("form").validate(
            {
                submitHandler: calcLoan,
                rules: myRules,
                messages: myMessages
            }
        );

        //add event handlers
        // $("form").submit(calcLoan);
        $("#calcButton").click(calcLoan);



        //add program logic

        function calcLoan() {


            //get data from

            var numSalary = parseFloat($("#numSalary").val());
            var numCreditScore = parseFloat($("#numCreditScore").val());
            var numMonths = parseFloat($("#numMonths").val());


            //parse to numbers

            // do the math


            //Calculate loan approval or denial


            //put results in spans


            //show results

            if (numSalary >=40000 && numCreditScore>=600)
            {
                results.innerHTML = "Approved";
            }
            else if (numSalary >=40000 && numCreditScore<=600 && numMonths>12)
            {
                results.innerHTML = "Approved";
            }
            else if (numSalary <=40000 && numCreditScore>=600 && numMonths>12)
            {
                results.innerHTML = "Approved";
            }

            else if (numSalary <=40000 && numCreditScore<=600 && numMonths<=12)
            {
                results.innerHTML = "Not Approved";
            }
            else if (numSalary <=40000 && numCreditScore>=600 && numMonths<=12)
            {
                results.innerHTML = "Not Approved";
            }
            else if (numSalary >=40000 && numCreditScore>=600 && numMonths<=12)
            {
                results.innerHTML = "Not Approved";
            }
            else {
                results.innerHTML = " You must enter your salary, credit score, and months of employment";
            }

            return false;

        }
    });

