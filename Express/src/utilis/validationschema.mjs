

export const userpostvalidation={
         username:{
            notEmpty:{
                errorMessage:"User name not to be empty"
            },
            isLength:{
                options:{
                    min:2,
                    max:10
                },
                errorMessage:"User name limit between 2-10"
            }
         },
         email:{
            notEmpty:{
                errorMessage:"email not to be empty"
            },
            isLength:{
                options:{
                    min:2
                },
                errorMessage:"Email limit between 2-10"
            }
         },
         age:{
            notEmpty:{
                errorMessage:"email not to be empty"
            },
         }
}