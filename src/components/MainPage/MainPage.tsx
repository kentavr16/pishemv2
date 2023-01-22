import { MainPageCard } from "./MainPageCard";
import Photo1 from "../../res/MainPagePic1.jpg"
import { useEffect, useRef } from "react";
import React from "react";


export default function MainPage() {
    const scrollable = useRef(true)
    const component = useRef<HTMLInputElement>(null);



    useEffect(() => {
        if (component.current) {
            component.current.addEventListener('wheel', (e: WheelEvent) => {
                e.preventDefault();
                if (scrollable.current) {
                    scrollable.current = false
                    setTimeout(() => {
                        if (e.deltaY > 0) {
                            let windowHeigth = document.documentElement.clientHeight
                            window.scrollBy(0, windowHeigth)
                        }
                        if (e.deltaY < 0) {
                            let windowHeigth = document.documentElement.clientHeight
                            window.scrollBy(0, -windowHeigth)
                        }
                    }, 300)
                    setTimeout(() => {
                        scrollable.current = true
                    }, 500)
                }
            }, { passive: false });

        }
    }, [])
    return (
        <div ref={component}>
            <MainPageCard
                num={1}
                title="Іноді не всі почуття можна виразити вголос"
                text="Часом ми відчуваємо, що так багато повинні сказати близькій людині - але нам не вистачає для цього слів. Не кожен з нас Шекспір, звісно. Проте це не означає, що наші близькі люди не знаслуговують на поему в свою честь."
                image={Photo1}
                cardFooter="Тож дозвольте нам допомогти в написанні Вашої Поеми!"
            />
            <MainPageCard
                num={2}
                imgOrder={{ order: -1 }}
                title="Дозвольте представитися - творче об'єднання 'ПишемоЗаВас'"
                text="Ми -колектив творчих людей, що має на меті допомогти вам створти самий коштовний подарунок для близької людини. ПишемоЗаВас - це передусім про креатив, творчість та новизну."
                image={Photo1}
                cardFooter="Що ж саме ми пропонуємо?"
            />
            <MainPageCard
                num={3}
                title="Іноді не всі почуття можна виразити вголос"
                text="Часом ми відчуваємо, що так багато повинні сказати близькій людині - але нам не вистачає для цього слів. Не кожен з нас Шекспір, звісно. Проте це не означає, що наші близькі люди не знаслуговують на поему в свою честь."
                image={Photo1}
                cardFooter="Тож дозвольте нам допомогти в написанні Вашої Поеми!"
            />
            <MainPageCard
                num={4}
                title="Іноді не всі почуття можна виразити вголос"
                text="Часом ми відчуваємо, що так багато повинні сказати близькій людині - але нам не вистачає для цього слів. Не кожен з нас Шекспір, звісно. Проте це не означає, що наші близькі люди не знаслуговують на поему в свою честь."
                image={Photo1}
                cardFooter="Тож дозвольте нам допомогти в написанні Вашої Поеми!"
            />
            <MainPageCard
                num={5}
                title="Іноді не всі почуття можна виразити вголос"
                text="Часом ми відчуваємо, що так багато повинні сказати близькій людині - але нам не вистачає для цього слів. Не кожен з нас Шекспір, звісно. Проте це не означає, що наші близькі люди не знаслуговують на поему в свою честь."
                image={Photo1}
                cardFooter="Тож дозвольте нам допомогти в написанні Вашої Поеми!"
            />

        </div>
    )
}