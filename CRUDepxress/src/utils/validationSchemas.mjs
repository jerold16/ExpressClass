export const validateuser = {
    user: {
        notEmpty: {
            errorMessage: "User name should not be empty"
        }
    },
    email: {
        notEmpty: {
            errorMessage: "Email should not be empty"
        }
    }
}
//we have to write all the field to go through the values to be saved
export const validateaddress = {
    user_id: {
        notEmpty: {
            errorMessage: "User id needed to save the address"
        }
    },
    line2: {

    },
    line1: {
        notEmpty: {
            errorMessage: "Line 1 is missing",
        },
        isLength: {
            options: {
                min: 6
            },
            errorMessage: "Mininum length for line 1 is 6"
        }
    }
    
}
export const validatecontact={
    name:{
        notEmpty:{
            errorMessage:'Enter the user name in the Contact form'
        }
    },
    phone:{
        notEmpty:{
            errorMessage:'Enter the phone in the Contact form'
        }

    },
    resume:{
        notEmpty:{
            errorMessage:'Enter the resume path in the Contact form'
        }

    }
}