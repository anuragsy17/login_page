import ChangePassword from "./Component/changePassword";

export const loginDetails = [
    {
        loginHead: [
            {
                id: 1,
                name: 'Sign in',
                class: 'signin_div',
                onclick: 'signin',
                path: '/',
                placeholder: [
                    {
                        name: 'Email',
                        class: 'email',
                        handleChange: 'handleEmail'
                    },
                    {
                        name: 'Password',
                        class: 'password',
                        handleChange: 'handlePassword'
                    },
                ]
            },
            {
                id: 2,
                name: 'New Account',
                class: 'signup_div',
                onclick: 'signup',
                path: 'signup',
                placeholder: [
                    {
                        name: 'Email',
                        placeholder: 'Email',
                        class: 'signup_email',
                    },
                    {
                        name: 'Password',
                        placeholder: 'Password',
                        class: 'signup_password',
                    },
                    {
                        name: 'ConfirmPassword',
                        placeholder: 'Confirm Password',
                        class: 'signup_confirm_password',
                    },
                ],
                ChangePassPlc: [
                    {
                        name: 'Email',
                        placeholder: 'Email',
                        class: 'changePass_email',
                    },
                    {
                        name: 'Password',
                        placeholder: 'New Password',
                        class: 'changePass_password',
                    },
                    {
                        name: 'ConfirmPassword',
                        placeholder: 'Confirm Password',
                        class: 'changePass_confirm_password',
                    },
                ]   
            },
            // {
            //     id: 3,
            //     //name: 'Forget Password',
            //     class: 'signup_div',
            //     onclick: 'signup',
            //     path: 'signup',
            //     placeholder: [
            //         {
            //             name: 'Email',
            //             placeholder: 'Email',
            //             class: 'changePass_email',
            //         },
            //         {
            //             name: 'Password',
            //             placeholder: 'New Password',
            //             class: 'changePass_password',
            //         },
            //         {
            //             name: 'ConfirmPassword',
            //             placeholder: 'Confirm Password',
            //             class: 'changePass_confirm_password',
            //         },
            //     ]   
            // }
        ],
    },
        
 ]

