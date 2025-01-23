import { $, component$, useStore, }  from '@builder.io/qwik';
import {Link, useNavigate } from '@builder.io/qwik-city';
import styles from "./confirmphone.module.css";

export default component$(() => {
    const store = useStore({
        inputs: ['', '', '', ''], // Храним значения инпутов
      });
    const navigate = useNavigate();
  
    const handleSubmit = $(async (e: Event) => {
        const form = e.target as HTMLFormElement | null

        if(form){
            const code = store.inputs.join('')
            const formDataObj = {
                confirmPhoneCode:{code}
            };
           
            try{
                const response = await fetch('http://localhost:3000/confirmphone', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formDataObj),
                    });
                
                if(!response.ok){
                    console.error('Ошибка сервера:', response.status);
                    alert(`Ошибка:'Не удалось отправить данные'`);
                    return;
                }
            } catch(e){
                console.error('Ошибка сети или выполнения:', e);
            }
            
            navigate('/userlocation');
        } else{
            throw Error("Произошла ошибка!")
        }
    })

    const handleInput= $((e: Event, indexInput:number)=>{
        const inputElem = e.target as HTMLInputElement | null

        if(inputElem){
            if(inputElem.value.length === 1){
                store.inputs[indexInput-1] = inputElem.value

                const nextInputElem = document.getElementById(`input_${indexInput + 1}`) as HTMLInputElement | null
                nextInputElem?.focus()
            }
            if(inputElem.value.length === 0){
                store.inputs[indexInput-1] = ""

                const prevInputElem = document.getElementById(`input_${indexInput - 1}`) as HTMLInputElement | null
                prevInputElem?.focus()
            }
        }
    })
    
    return( 
    <>
       <div class={styles.wrapper}>
            <div class={styles.top}>
                <Link href="/loginphone" class={styles.back_link}></Link>
                <div class={styles.page_name}>Login to Tamang Food <br /> Services</div>
            </div>
            <section class={styles.login_phone}>
                <h1>Verify phone number</h1>
                <p>Enter the 4-Digit code sent to you at +99999999999</p>
                <form action="" onSubmit$={handleSubmit} preventdefault:submit class={styles.login_phone_form}>
                    <div class={styles.inputs_container}>
                        <label>
                            <span class={styles.unvisible}>1 number</span>
                            <input type="text" inputMode="numeric" name="codeNum1" id="input_1" maxLength={1} required onInput$={(e)=> handleInput(e,1)}/>
                        </label>
                        <label>
                            <span class={styles.unvisible}>2 number</span>
                            <input type="text" inputMode="numeric" name="codeNum2" id="input_2" maxLength={1} required onInput$={(e)=> handleInput(e,2)}/>
                        </label>
                        <label>
                            <span class={styles.unvisible}>3 number</span>
                            <input type="text" inputMode="numeric" name="codeNum3" id="input_3" maxLength={1} required onInput$={(e)=> handleInput(e,3)}/>
                        </label>
                        <label>
                            <span class={styles.unvisible}>4 number</span>
                            <input type="text" inputMode="numeric" name="codeNum4" id="input_4" maxLength={1}  required onInput$={(e)=> handleInput(e,4)}/>
                        </label>
                    </div>
                    <button class={styles.submit_btn}>Continue</button>
                 </form>
                 <div class={styles.question_answer}>
                        <span class={styles.question}>Didn’t receive code?</span>
                        <button class={styles.answer}>Resend Again.</button>
                 </div>
                 <div class={styles.privacy_policy}><span>By Signing up you agree to our Terms Conditions & Privacy Policy.</span></div>
            </section>  
       </div>
    </>)
})

