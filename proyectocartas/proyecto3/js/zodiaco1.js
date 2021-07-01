bto.addEventListener('click', e=>{
     e.preventDefault()

     let signo1=document.getElementById('signo1').value
     signo1=parseInt(signo1)

     let signo2=document.getElementById('signo2').value
     signo2=parseInt(signo2)

    let validar=document.getElementById('validar')

    
   if(signo1==1 && signo2==8){ 
        texto=`<p>Aries tiende a ser extrovertido, seguro e impulsivo y no suele tomarse bien las críticas; mientras que los Escorpio son mucho más introvertidos, prácticos, conservadores e incluso, pesimistas.

Son muy metódicos en su modo de abordar la vida y las relaciones y necesitan tener un plan cuidadosamente detallado de toda su vida, mientras que Aries se siente atraído por la emoción de los desconocido, por la improvisación. Los Escorpio suelen ser muy justos, pero también bastante severos y serios, por lo que Aries se puede sentir juzgado por su pareja Escorpio.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease") 

     }
     else if (signo1==1 && signo2==10){ 
        texto=`<p>Aries tiende a ser extrovertido, seguro e impulsivo y no suele tomarse bien las críticas, mientras que los Capricornio son mucho más introvertidos, prácticos, conservadores e incluso, pesimistas. Son muy metódicos en su modo de abordar la vida y las relaciones, y necesitan tener un plan cuidadosamente detallado de toda su vida, mientras que Aries se siente atraído por la emoción de lo desconocido. Los Capricornio suelen ser muy justos, pero también bastante severos y serios, por lo que Aries se puede sentir juzgado por su pareja Capricornio.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease") 
}

    else if (signo1==1 && signo2==2){ 
        texto=`<p>A primera vista hay un montón de diferencias entre Tauro y Aries que podrían suponer todo un reto de cara a una relación a largo plazo. Aries es espontáneo y polémico, mientras que Tauro es más parado y tranquilo, y prefiere un ritmo más regular.

Si ambos miembros de la pareja se aman lo suficiente como para absorber sus cualidades opuestas, entonces ganarán mucho como personas y como pareja. Aries se volverá más equilibrado y Tauro más enérgico.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease") 
}
    else if (signo1==1 && signo2==5){ 
        texto=`<p>Ambos son signos de fuego, lo cual puede dar lugar a algunas confrontaciones y a un choque de egos. Sin embargo, la compatibilidad es alta y Aries y Leo compartirán una gran vida social y una relación de compromiso sentimental a largo plazo, si consiguen compartir el protagonismo. Ambos pueden formar también un gran equipo de trabajo si se las arreglan para complementar las habilidades del otro en lugar de competir entre sí.

<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease") 
}
    else if (signo1==1 && signo2==11){ 
        texto=`<p>Aries y Acuario tienen mucho en común y un grado de compatibilidad muy alto. Ambos signos son independientes, humanitarios, optimistas y entusiastas. Les gustan las emociones fuertes, la valentía y carácter progresivo de los Acuario tienden a atraer mucho a los Aries.  Los Acuario se interesan mucho por cuestiones sociales. Loa Aries son muy trabajadores y ambiciosos, lo cual ayudará mucho a Acuario a satisfacer sus sueños de transformar la sociedad.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease") 
}
    else if (signo1==1 && signo2==4){ 
        texto=`<p>La compatibilidad entre Aries y Cáncer es regular. Cuando Cáncer empieza una relación con Aries se suele establecer entre ambos una conexión inmediata a nivel emocional. El signo de Cáncer se sentirá muy atraído por el aire apasionado, seguro y entusiasta de Aries, quien a su vez, se sentirá en paz al estar con un Cáncer.  Es una combinación de elementos interesante, que puede llegar a ser positiva, aunque posiblemente más como amistad que como relación de pareja a largo plazo, porque la forma de ser y las necesidades emocionales de estos dos signos son bastante distintas.

<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")
}
    else if (signo1==1 && signo2==9){ 
        texto=`<p>Tanto Aries como Sagitario son signos de Fuego, por lo que a esta combinación no le faltará nada de variedad y emoción, pudiendo ser, en ocasiones, explosiva. La relación despegará directamente desde su comienzo. Su grado de compatibilidad es muy alto. 
Ambos signos tienen una capacidad de atención relativamente corta y necesitan cambios constantes, lo que determinará el tono de la relación. Los planetas que rigen ambos signos son muy amigos y esto garantiza una relación abierta y comunicativa.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
  else if (signo1==1 && signo2==1){ 
        texto=`<p>El nivel de compatibilidad de Aries con Aries es regular. Se pasarán el día midiéndose y se puede establecer una relación de fuerzas constante. Los Aries son muy apasionados, exigentes y competitivos, por lo que es probable, que en esta relación predominen los choques de ego. Los Aires también suelen estar convencidos, que tienen razón, por lo que las discusiones entre ambos pueden ser largas y complicadas.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
  else if (signo1==1 && signo2==3){ 
        texto=`<p>Aries se suele sentir atraido por la creatividad y la energía de Géminis, y esta combinación promete una gran amistad, una brillante conversación e interesantes momentos de ocio juntos. Por lo que su grado de compatibilidad puede ser muy grande. A Géminis le gusta hablar, relacionarse y, por lo general, tiene un gran sentido del humor; esto también atrae a Aries, a quien le encanta divertirse y gastar bromas continuamente. Ambos signos tienen un gran sentido de la diversión por lo que son muy compatibles en este aspecto.

<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
  else if (signo1==1 && signo2==7){ 
        texto=`<p>Aries y Libra son signos opuestos, lo cual puede ser bueno, al menos, al inicio de la relación por la atracción de opuestos. No obstante, a medida que el tiempo pasa la novedad desaparece, y puede que haya demasiadas diferencias para que la relación funcione a largo plazo, a menos que exista una base muy fuerte de amor y de buena voluntad por parte de ambos signos para adaptar su fuerte personalidad a la de su pareja.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
  else if (signo1==1 && signo2==12){ 
        texto=`<p>Una pareja Aries y Piscis es una combinación difícil con bastantes retos, porque a pesar de una fuerte atracción inicial, existen diferencias importantes entre estos dos signos, que tendrán que ser superadas para que una relación de pareja funcione a largo plazo. Si logran formar una pareja estable, es probable que sea una relación fuera de lo común. El fuego de Aries puede a veces ser extinguido por el agua de Piscis, que puede pertubar el lado feliz y divertido de su pareja Aries. Por otra parte, como Piscis representa la zona escondida y secreta de Aries, existe mucha posibilidad de una relación de amantes secretos o un amor prohibido entre los dos signos.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
  else if (signo1==1 && signo2==6){ 
        texto=`<p>La compatibilidad entre Aries y Virgo es regular. Los Virgo suelen ser bastante fríos, prácticos y a veces, críticos, lo que supone un contraste para los Aries que son rápidos, impetuosos e impulsivos. Mientras que muchos Aries corren de aquí para allá como si no hubiera un mañana, Virgo es también rápido y dinámico, pero a nivel intelectual. En una combinación Virgo-Aries, ambos tienen mucha energía, pero la canalizan de formas distintas. Se podría decir que no es una combinación para pusilánimes y, de hecho, estos dos signos combinan mejor para una relación de amistad a largo plazo que para una relación de pareja estable.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==2 && signo2==8){ 
        texto=`<p>La compatibilidad entre Escorpio y Tauro es más alta de lo que podría parecer. Tauro y Escorpio son signos zodiacales opuestos y por eso, a veces, se atraen mutuamente sin remedio. Su primer encuentro podría ser sencillamente increíble y a Tauro le podría sorprender la pasión, que despierta su presencia. Dada la conexión que existe entre Marte y Venus hay muchas probabilidades de que surja una fuerte atracción magnética entre los dos signos Tauro y Escorpio.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==2 && signo2==10){ 
        texto=`<p>La compatibilidad entre Capricornio y Tauro es muy alta, porque tienen mucho en común y pueden esperar ser muy felices juntos. El sentido práctico de Capricornio se lleva bien con la actitud realista de Tauro. Su conexión inicial con Capricornio será buena y Tauro encontrará muchas similitudes con su pareja. Tanto Tauro como Capricornio ven la vida con un enfoque práctico. Ambos son realistas y viven en el mundo real. Y en lo, que se refiere a los aspectos espirituales y filosóficos de la vida, también muestran una gran compatibilidad. La combinación amorosa entre estos dos signos del zodíaco estará basada en la confianza mútua, además de formalidad y coherencia.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==2 && signo2==2){ 
        texto=`<p>La compatibilidad entre Tauro y Tauro es muy alta. Tauro es el signo de la tierra y esto constituye una base muy sólida para la relación. Hay algo simple y franco en los Tauro. Son prácticos y no se complican demasiado, por lo que son muy compatibles en una relación.

La energía sociable y cariñosa de Venus contribuirá a un primer encuentro mágico. Los Tauro se sienten cómodos en compañía de otros Tauro y aprecian la facilidad que ambos tienen para compartir afecto. Su primer encuentro se puede producir en algún evento social o artístico, porque Venus rige también el arte, la música, la ropa, la moda y la joyería y los Tauro se sienten atraí dos por estas cosas.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==2 && signo2==5){ 
        texto=`<p>La compatibilidad entre Leo y Tauro es alta, siempre y cuando los dos signos asuman sus diferencias y las gestionen de forma inteligente y evitando su habitual terquedad. La terquedad de los Tauro también forma parte de las características de Leo. Ambos poseen una gran determinación y se aferran a una decisión una vez que la han tomado. Esta combinación zodiacal mostrará, muy probablemente, signos de permanencia, firmeza y devoción, a pesar de producirse fuertes peleas en ocasiones.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==2 && signo2==11){ 
        texto=`<p>La compatibilidad entre Acuario y Tauro no es muy alta debido a las incompatibilidades, que existen entre ellos. Pero sí tiene muchas posibilidades siempre y cuando ambos estén dispuestos a esforzarse para que funcione.

Tauro cree en la simplicidad y el sentido práctico de las cosas. Su enfoque de la vida es realista, convencional y sensible. Por otro lado, Acuario tiende a ir en contra de las normas y creer en un enfoque más contemporáneo y progresista.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==2 && signo2==4){ 
        texto=`<p>Esta combinación Cáncer - Tauro es una de las más compatibles tanto para Cáncer como para Tauro. La gran ventaja es, que estos dos signos disfrutan demostrando su afecto hacia su pareja, y cuando los dos están de buen humor, es una combinación irresistible.

Tauro sirve como un ancla para el variable temperamento emocional de Cáncer, siendo capaz de calmar las aguas y de dar lugar a una relación de amistad y de realización de pareja entre ambos signos. A su vez, Cáncer aporta un sentido práctico y poco sofisticado a la pareja y alivia la tensión y volatilidad de Tauro.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==2 && signo2==9){ 
        texto=`<p>La compatibilidad entre Sagitario y Tauro es bastante baja porque son signos muy diferentes. Tauro es práctico y se preocupa por lo que puede tocar y sentir (el mundo de las cosas reales). El estilo de vida de Sagitario no depende de la costumbre y la estructura como el de Tauro, sino que Sagitario tiende a basar su vida en una filosofía de libertad, independencia y espontaneidad. Es poco probable que pueda proporcionar a Tauro la seguridad y comodidad que éste necesita.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==2 && signo2==1){ 
        texto=`<p>La compatibilidad entre Aries y Tauro es muy buena. Tauro un signo de Tierra, mientras que Aries es un signo de Fuego, por lo que las relaciones entre estos dos signos suelen estar centradas generalmente en el aspecto financiero y materialista de la vida. Es una combinación excelente para las personas que quieren hacer dinero, aunque centrarse demasiado en el dinero en cualquier relación puede conducir a la avaricia y el materialismo excesivo y a desatender otros aspectos importantes de la pareja.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==2 && signo2==3){ 
        texto=`<p>La compatibilidad entre Géminis y Tauro no es muy alta porque aunque los planetas Venus y Mercurio, que rigen sobre Tauro y Géminis, respectivamente, se llevan bien, hay algunas diferencias importantes en las motivaciones y la personalidad básicas de ambos signos. Los Tauro avanzan en la vida con paso firme y acompasado. Nunca tienen prisa por llegar a ninguna parte y poseen un elevado grado de estabilidad. Prefieren hurgar en las cosas de forma profunda y metódica, resolviendo los problemas paso a paso.

<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==2 && signo2==7){ 
        texto=`<p>La compatibilidad entre Libra y Tauro no es muy alta, por no decir baja y recomendamos mucho esfuerzo y comprensión por parte de los dos para hacer funcionar esta relación. Lo bueno es que a Libra y a Tauro les gustan los retos - y hacer perdurar esta relación supone, sin duda, un reto muy interesante.

Tanto Libra como Tauro están regidos por Venus, por lo que la atracción es inmediata. Libra es un signo de aire y estimula la mente de Tauro, mientras que el componente Tierra de éste puede asentar a Libra, frenando su dispersión mental.

<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==2 && signo2==12){ 
        texto=`<p>La compatibilidad entre Piscis y Tauro es muy buena aunque sobre todo desde el punto de vista de compañerismo y actividad social. Si una pareja Tauro-Piscis decide separarse, lo más seguro es que logren conservar una excelente amistad que puede incluso llegar a incomodar a futuras parejas. Tanto Tauro como Piscis tienen una actitud comprensiva, personalidad despreocupada y disposición amigable. A ambos les encanta mantener la armonía en sus relaciones. <img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==2 && signo2==6){ 
        texto=`<p>Una combinación con compatibilidad muy alta, en realidad Tauro y Virgo tiene todas posibilidades, para tener una relación feliz y estable durante muchos años. Tauro y Virgo pueden disfrutar de una vida con mucha armonía. A ninguno de los dos les gustan las extravagancias ni las inconsistencias. En su relación no faltará dedicación y lealtad.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==3 && signo2==8){ 
        texto=`<p>La compatibilidad entre Escorpio y Géminis es bastante baja y ambas partes de la relación deberán trabajar duramente para conseguir, que funcione. Si son lo suficientemente decididos, podría ser posible, pero deberán tener cuidado o se podrían ver envueltos en un escenario en el, que incluso dirigirse la palabra les resultaría difícil. Géminis y Escorpio son totalmente opuestos entre sí en casi todos los aspectos de sus personalidades, de ahí que hacer que esta combinación zodiacal funcione sea todo un reto.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}

 else if (signo1==3 && signo2==10){ 
        texto=`<p>La compatibilidad de Capricornio con Géminis es bastante baja. A Capricornio le gusta avanzar en la vida de forma sistemática, siguiendo planes formulados para evitar sorpresas o imprevistos en su camino. Y aunque se convierte en un proceso monótono y tedioso, Capricornio no dejará de seguir avanzando hacia su objetivo hasta llegar a conseguirlo. Géminis es todo lo contrario. Es uno de los signos más impulsivos del Zodiaco, y es capaz de cambiar de planes todos los días. Le resulta muy difícil fijar (y cumplir con) estrategias y casi imposible aguantar una situación (o vida) aburrida. <img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}

 else if (signo1==3 && signo2==2){ 
        texto=`<p>La compatibilidad entre Géminis y Tauro no es muy alta porque aunque los planetas Venus y Mercurio, que rigen sobre Tauro y Géminis, respectivamente, se llevan bien, hay algunas diferencias importantes en las motivaciones y la personalidad básicas de ambos signos.

Los Tauro avanzan en la vida con paso firme y acompasado. Nunca tienen prisa por llegar a ninguna parte y poseen un elevado grado de estabilidad. Prefieren hurgar en las cosas de forma profunda y metódica, resolviendo los problemas paso a paso. Géminis en cambio, es totalmente distinto y prefiere saltar de una cosa a otra, pudiendo llegar a ser inquieto e impaciente (incluso irritable, en ocasiones). No es capaz de permanecer sentado o de pie en un mismo lugar durante mucho tiempo. Y tampoco es capaz de ser coherente. <img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}

 else if (signo1==3 && signo2==5){ 
        texto=`<p>La compatibilidad entre Leo y Géminis es bastante alta y en esta relación ambos descubrirán tener mucho en común. Tanto a Géminis como a Leo les encanta divertirse.

Los dos tienen una naturaleza aventurera y disfrutan de la vida. Se encontrarán mutuamente fascinantes y disfrutarán en compañía del otro.

Leo está al mismo nivel intelectual que Géminis, por lo que sus conversaciones serán muy interesantes y satisfactorias para ambos.

Gran parte de las combinaciones de aire y fuego tienen mucho a su favor y la de Géminis y Leo no es una excepción.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}

 else if (signo1==3 && signo2==11){ 
        texto=`<p>La compatibilidad entre los signos Acuario y Géminis es muy alta, ya que ambos esperan sacar más o menos lo mismo de la vida.

Tienen planteamientos muy parecidos e incluso a nivel intelectual son compatibles. Es una de las combinaciones más compatibles del zodiaco, porque la conexión kármica es muy fuerte.

Una pareja de Géminis y Acuario disfrutan en la compañía del otro. Les encanta hablar durante horas, y comparten los mismos intereses, las mismas aficiones, las mismas opiniones e incluso los mismos amigos.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}

 else if (signo1==3 && signo2==4){ 
        texto=`<p>A primera vista los signos Cáncer y Géminis no tienen mucha compatibilidad porque existen diferencias muy importantes entre sus objetivos y los métodos que utiliza para conseguirlos. No obstante, algunos expertos en astrología afirman, que cuando dos signos opuestos se atraen, la relación puede funcionar precisamente por la atracción de lo opuesto. Y esto podría ser el caso en una relación entre Cáncer y Géminis, aunque solo funcionará si ambos signos son conscientes, y respetan, las diferencias en la forma de ser de cada uno.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}

 else if (signo1==3 && signo2==9){ 
        texto=`<p>Esta combinación de energías planetarias resulta intrigante. Sagitario es el signo opuesto a Géminis y el que resulte bien o no dependerá de la perspectiva, que tomen ambos.

Esta mezcla de diferencias y similaridades en sus personalidades implica, que ambos deberán esforzarse un poco para que la relación funcione. Sobre todo, ambos necesitan ser libres para explorar sus propias vidas aunque mantengan una relación. Si lo hacen, si tienen bastantes posibilidades de que la relación funcione.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}

 else if (signo1==3 && signo2==1){ 
        texto=`<p>Aries se suele sentir atraido por la creatividad y la energía de Géminis, y esta combinación promete una gran amistad, una brillante conversación e interesantes momentos de ocio juntos. Por lo que su grado de compatibilidad puede ser muy grande. A Géminis le gusta hablar, relacionarse y, por lo general, tiene un gran sentido del humor; esto también atrae a Aries, a quien le encanta divertirse y gastar bromas continuamente. Ambos signos tienen un gran sentido de la diversión por lo que son muy compatibles en este aspecto.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}

 else if (signo1==3 && signo2==3){ 
        texto=`<p>La compatibilidad de Géminis con Géminis es alta y lo más probable, que una pareja de dos Géminis tengan una relación llena de diversión, aventura y variedad aunque tengan que aprender virtudes como la paciencia y el compromiso para que funcione a largo plazo. Al signo Géminis le encanta la variedad y la conversación, y una pareja de dos disfrutará haciendo planes para realizar viajes, hacer cambios en la casa, organizar reuniones con amigos etc... Sin embargo, es aconsejable que intenten controlarse un poco para evitar, que su vida tenga muchísimos cambios y mucha acción a costa de estabilidad y sosiego.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}

 else if (signo1==3 && signo2==7){ 
        texto=`<p>Géminis y Libra presentan una excelente compatibilidad, por lo que si esta es la combinación de tu relación hay muchas probabilidades de que seas extremadamente feliz durante mucho tiempo.

Incluso se trata de una combinación tan afortunada, que se podría decir que existe un toque de magia entre ambos signos. En ocasiones Libra y Géminis se entienden tan bien, que ni siquiera necesitan palabras.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}

 else if (signo1==3 && signo2==12){ 
        texto=`<p>La compatibilidad entre Piscis y Géminis no es una de las más altas de estos signos y ambos tendrán, que esforzarse para hacer, que la relación funcione. Sus elementos de aire y agua son muy distintos porque mientras, que el Aire está relacionado con la mente, el Agua está relacionado con las emociones.

Piscis y Géminis tienen algunas cosas en común. Ambos están abiertos a nuevas ideas, son flexibles, transigentes y dispuestos a cambiar de postura si se equivocan.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}

 else if (signo1==3 && signo2==6){ 
        texto=`<p>La compatibilidad de Géminis con Virgo es bastante alta, sobre todo si los dos se esfuerzan en comprender y escuchar a su pareja.

Las personas del signo Geminis suelen ser inteligentes, racionales y prácticas. Igual que Virgo, tienden a ver las cosas tales como son. Estos dos signos tendrán una capacidad de comunicación alta, sobre todo a nivel intelectual. Aunque Virgo y Géminis están regidos por el mismo planeta, Mercurio, entre ambos signos existen algunas diferencias fundamentales, así como algunas similaritudes importantes. Esto quiere decir, que las combinaciones Virgo-Géminis podrían ser enriquecedoras si ambos signos hacen concesiones por su pareja.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==4 && signo2==8){ 
        texto=`<p>Las personas, que nacen bajo el mismo elemento suelen sentirse cómodas y atraerse entre sí. Este es el caso de Cáncer y Escorpio. Tiene un grado de compatibilidad alto. Ambos son sensibles, emocionales y cariñosos, pero Escorpio tiene un modo muy distinto de expresar el amor. El amor de Escorpio es exigente y pide mucho más a cambio de lo que da. Los Escorpio también tienden, en general, a ser menos constantes.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==4 && signo2==10){ 
        texto=`<p>La Compatibilidad entre Cáncer y Capricornio es már bien baja. A pesar de las importantes diferencias entre los signos de Cáncer y Capricornio, es posible que se establezca una relación entre los dos, aunque ambos deberán poner un poco de su parte. Mientras que los Cáncer son cariñosos y expresivos, a Capricornio le cuesta expresar sus sentimientos.

El enfoque de la vida de los Cáncer se puede resumir del siguiente modo: 'Lo mejor de la vida no son las cosas'. Cáncer es diametralmente opuesto a Capricornio, que es muy 'materialista'; por lo general, su objetivo son los logros materiales y económicos, mientras que Cáncer tiene un enfoque más simple e intuitivo. <img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==4 && signo2==2){ 
        texto=`<p>Esta combinación Cáncer - Tauro es una de las más compatibles tanto para Cáncer como para Tauro. La gran ventaja es, que estos dos signos disfrutan demostrando su afecto hacia su pareja, y cuando los dos están de buen humor, es una combinación irresistible.

Tauro sirve como un ancla para el variable temperamento emocional de Cáncer, siendo capaz de calmar las aguas y de dar lugar a una relación de amistad y de realización de pareja entre ambos signos. A su vez, Cáncer aporta un sentido práctico y poco sofisticado a la pareja y alivia la tensión y volatilidad de Tauro.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==4 && signo2==5){ 
        texto=`<p>Cáncer-Leo es una combinación es muy compatible. Tanto Cáncer como Leo tienen un ego bastante frágil, son vulnerables y no encajan bien la crítica, porque se ofenden con facilidad. Ambos signos necesitan cariño y mucha atención de su pareja.


El entusiasta y seguro Leo podría ser la solución perfecta para la inseguridad y la falta de confianza en sí mismos de los Cáncer, dada la capacidad de Leo para levantar el ánimo y hacer, que los otros se sientan mejor.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==4 && signo2==11){ 
        texto=`<p>La combinación de los signos Cáncer y Acuario presenta muchos retos en una pareja. La compatibilidad es baja a primera vista, aunque gracias a que ambos signos son muy persistentes, si hay suficientemente amor y disposición de esforzarse, una relación duradera es difícil, pero no imposible.

El gusto por la libertad y la independencia de Acuario, frente a la rigidez y conservadurismo de Cáncer, puede ser una combinación un poco difícil de llevar, sobre todo para los Cáncer a los que les puede causar inseguridad y resentimiento.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==4 && signo2==4){ 
        texto=`<p>El grado de compatibilidad entre dos Cáncer es muy alto. Es una combinación muy buena, ya que los Cáncer son un signo, que hay que entender para avanzar y ¿Quién mejor para entenderse que ellos mismos?

Los Cáncer son gente solidaria y expresan su cualidad atendiendo a las necesidades de los otros. Esta receta es ideal para la vida familiar, el cuidado de los niños y la búsqueda de un hogar más tranquilo.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==4 && signo2==9){ 
        texto=`<p>El grado de compatibilidad entre Cáncer y Sagitario es más bien bajo. Aunque hay una posibilidad de que Cáncer y Sagitario experimenten una fuerte atracción al conocerse, la relación puede no estar destinada a funcionar a largo plazo.


Cáncer es propenso a enamorarse perdidamente del fuerte carácter de Sagitario, pero una relación de amistad o profesional tiene más posibilidades de funcionar, que como pareja.

Sagitario es honesto, muy directo y, en ocasiones, insensible; y aunque los Cáncer aprecien la honestidad y la franqueza, son muy sensibles a las críticas.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==4 && signo2==1){ 
        texto=`<p>La compatibilidad entre Aries y Cáncer es regular. Cuando Cáncer empieza una relación con Aries se suele establecer entre ambos una conexión inmediata a nivel emocional. El signo de Cáncer se sentirá muy atraído por el aire apasionado, seguro y entusiasta de Aries, quien a su vez, se sentirá en paz al estar con un Cáncer.


Es una combinación de elementos interesante, que puede llegar a ser positiva, aunque posiblemente más como amistad que como relación de pareja a largo plazo, porque la forma de ser y las necesidades emocionales de estos dos signos son bastante distintas.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==4 && signo2==3){ 
        texto=`<p>A primera vista los signos Cáncer y Géminis no tienen mucha compatibilidad porque existen diferencias muy importantes entre sus objetivos y los métodos que utiliza para conseguirlos.

No obstante, algunos expertos en astrología afirman, que cuando dos signos opuestos se atraen, la relación puede funcionar precisamente por la atracción de lo opuesto. Y esto podría ser el caso en una relación entre Cáncer y Géminis, aunque solo funcionará si ambos signos son conscientes, y respetan, las diferencias en la forma de ser de cada uno.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==4 && signo2==7){ 
        texto=`<p>La compatibilidad a largo plazo entre Cáncer y Libra es una combinación de signos es bastante baja y solamente sobreviriá la pareja si hay una base de amor y pasión muy fuerte.


Una relación entre Cáncer y Libra es una de las relaciones más difíciles del Zodiaco, y en ocasiones dará lugar a un enorme malestar, a pesar de que al principio de la relación las diferencias no sean claras; tanto Cáncer como Libra buscan la paz, el sosiego y la armonía, por lo que al principio, la relación puede parecer muy sencilla.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==4 && signo2==12){ 
        texto=`<p>Piscis y Cáncer tienen mucho en común, especialmente en cuanto a compatibilidad emocional. Ambos signos se entienden instintivamente entre sí y sienten las necesidades del otro. Ambos son cariñosos y dan apoyo a su pareja.

Existe un fuerte lazo kármico entre Cáncer y Piscis, que por ser el signo más psíquico y espiritual, anima a Cáncer a poner en marcha sus ideas más filosóficas y espirituales. Cáncer, a su vez, ayudará a Piscis a centrarse en cosas más concretas, como la familia.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
 else if (signo1==4 && signo2==6){ 
        texto=`<p>Una combinación Cáncer y Virgo tiene compatibilidad muy alta. Esta es una combinación rica y fértil de dos signos femeninos del zodiaco, regidos por la Luna y por Mercurio, respectivamente. La combinación de Cáncer y Virgo produce grandes resultados a todos los niveles.


La sensibilidad de la Luna que rige Cáncer, y Mercurio, intelectualmente brillante, constituyen una combinación maravillosa.

De esta receta, cabe esperar una gran amistad y comprensión, aunque en ocasiones Virgo tendrá problemas para entender los frecuentes cambios de humor de Cáncer. Sin embargo, debido a que Virgo es receptivo y capaz de analizar las cosas, tenderá con el tiempo a hacerse más responsable de las necesidades de Cáncer quien, a su vez, aprenderá a ser más razonable en sus exigencias.<img src="imagenes/balloons.png"></p>`
        validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")    

}
else if (signo1==6 && signo2==8){
    texto=`<p>La compatibilidad de Escorpio con Virgo es bastante alta, ya que la combinación de Tierra con Agua hace, que esta relación suela ser fructífera en muchos sentidos.


Ambos signos conectan muy bien, porque Virgo es el signo de amistad y realización para Escorpio, mientras que Escorpio representa el signo de comunicación para Virgo.  

Características Aries

Tanto Escorpio como Virgo tienen un enfoque práctico ante la vida. No obstante los Escorpio son mucho más aventureros, que el más prudente Virgo. Escorpio tendrá que asumir las reticencias de su pareja Virgo aunque no las comparta.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==6 && signo2==10){
    texto=`<p>La compatibilidad de Capricornio con Virgo es muy alta gracias a una combinación de elementos similares, que da una buena base para su relación. Virgo tendrá una compenetración inmediata con Capricornio. Por algún motivo, Capricornio parece menos serio, para Virgo que para otros signos del Zodiaco.


Ambos signos son sensatos y prácticos, pero con algunas diferencias. Por ejemplo, los Virgo suelen estar más interesados en ofrecer un servicio práctico y claro que los Capricornio a quienes les interesa más el éxito. A Ambos signos son realistas, leales y poseen la madurez necesaria para encontrar soluciones reales para problemas difíciles.

<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==6 && signo2==2){
    texto=`<p>Una combinación con compatibilidad muy alta, en realidad Tauro y Virgo tiene todas posibilidades, para tener una relación feliz y estable durante muchos años.


Tauro y Virgo pueden disfrutar de una vida con mucha armonía. A ninguno de los dos les gustan las extravagancias ni las inconsistencias. En su relación no faltará dedicación y lealtad.

Compatibilidad Virgo y Tauro

Tanto Virgo como Tauro son prácticos; los dos son signos de Tierra y cuando se combina Tierra con Tierra se obtiene una base sólida, para una larga relación. Ambos signos se complementarán entre sí a muchos niveles: físicamente, emocionalmente y mentalmente.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==6 && signo2==5){
    texto=`<p>La compatibilidad de Leo con Virgo es regular, y ambos signos tendrán, que trabajar bastante para que la relación sea duradera.


La personalidad de Leo es muy distinta a la de Virgo. Leo busca ser el centro de atención, mentras que Virgo es una persona mucho más privada.

Compatibilidad Virgo y Leo

Virgo-Leo resulta pues una combinación complicada, en la que las principales fuerzas son el poder de la mente (Virgo) frente al ego (Leo) y, para que funcione, ambos signos deben hacer un esfuerzo.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==6 && signo2==11){
    texto=`<p>La compatibilidad de Acuario con Virgo es una de las más bajas del Zodiaco y tendrá, que haber mucho amor para que esta relación tenga posibilidades a largo plazo. Nada es imposible y todo con esfuerzo se consigue, así que si esta es la combinación de su relación, ¡Manos a la obra!

Las compatibilidades entre Virgo y Acuario no serán muy obvias. Acuario y Virgo no se suelen atraer mutuamente por naturaleza y es más probable, que se conozcan por una situación de trabajo o un proyecto de estudios.

Su relación tiene alguna posibilidad, pero tendrán que ceder los dos, porque tienen filosofías de vida muy distintas.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==6 && signo2==4){
    texto=`<p>Una combinación Cáncer y Virgo tiene compatibilidad muy alta. Esta es una combinación rica y fértil de dos signos femeninos del zodiaco, regidos por la Luna y por Mercurio, respectivamente. La combinación de Cáncer y Virgo produce grandes resultados a todos los niveles.

La sensibilidad de la Luna que rige Cáncer, y Mercurio, intelectualmente brillante, constituyen una combinación maravillosa.

De esta receta, cabe esperar una gran amistad y comprensión, aunque en ocasiones Virgo tendrá problemas para entender los frecuentes cambios de humor de Cáncer. Sin embargo, debido a que Virgo es receptivo y capaz de analizar las cosas, tenderá con el tiempo a hacerse más responsable de las necesidades de Cáncer quien, a su vez, aprenderá a ser más razonable en sus exigencias.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==6 && signo2==9){
    texto=`<p>La compatibilidad de Sagitario con Virgo no es muy alta dadas las grandes diferencias, que existen entre estos dos signos. Mientras, que Virgo presta atención a los pequeños detalles, Sagitario tiende a centrarse en la visión global.

No obstante, la relación tiene una cosa muy importante a su favor - ambos signos son mutables lo que indica adaptabilidad. Esto quiere decir, que si aprenden a aceptar los puntos de vista del otro y a no considerar demasiado importantes sus propias opiniones, serán capaces de alcanzar el éxito en una relación.

<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==6 && signo2==1){
    texto=`<p>La compatibilidad entre Aries y Virgo es regular. Los Virgo suelen ser bastante fríos, prácticos y a veces, críticos, lo que supone un contraste para los Aries que son rápidos, impetuosos e impulsivos.


Mientras que muchos Aries corren de aquí para allá como si no hubiera un mañana, Virgo es también rápido y dinámico, pero a nivel intelectual. En una combinación Virgo-Aries, ambos tienen mucha energía, pero la canalizan de formas distintas. Se podría decir que no es una combinación para pusilánimes y, de hecho, estos dos signos combinan mejor para una relación de amistad a largo plazo que para una relación de pareja estable.

<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==6 && signo2==3){
    texto=`<p>La compatibilidad de Géminis con Virgo es bastante alta, sobre todo si los dos se esfuerzan en comprender y escuchar a su pareja.

Las personas del signo Geminis suelen ser inteligentes, racionales y prácticas. Igual que Virgo, tienden a ver las cosas tales como son. Estos dos signos tendrán una capacidad de comunicación alta, sobre todo a nivel intelectual.

Compatibilidad de Virgo y Géminis

Aunque Virgo y Géminis están regidos por el mismo planeta, Mercurio, entre ambos signos existen algunas diferencias fundamentales, así como algunas similaritudes importantes. Esto quiere decir, que las combinaciones Virgo-Géminis podrían ser enriquecedoras si ambos signos hacen concesiones por su pareja.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==6 && signo2==7){
    texto=`<p>La compatibilidad de Libra con Virgo no es muy alta y para que funcione la relación ambos signos tendrán que transigir. No obstante, cuando funciona puede formarse una pareja muy equilibrada y muy especial, sobre todo cuando ambos logran convertir sus diferencias en un activo complementario para su pareja.

Virgo y Libra tienen distintos carácteres además de distintos temperamentos. Mientras que Virgo tiende a ser crítico, Libra no suele juzgar a las personas y no tiene problema en aceptar distintos puntos de vista - todo al contrario que Virgo que es mucho más exigente.

<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==6 && signo2==12){
    texto=`<p>La compatibilidad de Piscis con Virgo es muy buena a pesar de una contradicción entre los dos signos.

Son dos signos opuestos: algo que paradójicamente en Astrología se suele considerar como un indicador positivo de amor y matrimonio. Al mismo tiempo, sus enfoques de la vida son muy diferentes y sus personalidades también.

Ambos signos son inconstantes y de humor variable. Piscis es un signo de agua y, por tanto, es sensible y extremadamente intuitivo. Los Virgo, en cambio, son signo de tierra y son racionales y menos emocionales.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==6 && signo2==6){
    texto=`<p>La compatibilidad de Virgo con Virgo es muy alta y en esta relación la palabra clave es el perfeccionismo y de ahí se deriva el principal problema, que deban superar - exigencias excesivas. Virgo es tremendamente aplicado y si funcionan como pareja, juntos serán capaces de mover montañas.


Por tanto Virgo-Virgo puede ser una combinación formidable, siempre y cuando eviten, que los estándares de ambos sean tan elevados, que ninguno de ellos puede alcanzarlos. Si no sus vidas serán muy desgraciadas, por lo que ambos deberán intentar no ser demasiado críticos con el otro o poner el listón excesivamente alto.

<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}

else if (signo1==7 && signo2==8){
    texto=`<p>La pareja formada por Escorpio y Libra tiene la gran ventaja de ser una relación muy equilibrada porque la compatibilidad entre estos dos signos es altísima. Libra cuyo planeta es Venus representa el amor, la sensualidad y el placer. En cambio Escorpio está regido por Marte, que representa la acción, la estrategia y el ingenio; y por Plutón, el poder, el inframundo.


Son características muy complementarias porque son opuestos. Generalmente los opuestos se atraen, pero en este caso lo importante es que se complementan. Escorpio ayuda a tomar decisiones a Libra, que es tarea difícil para él, que se lo piensa todo mucho. Y Libra ayuda a Escorpio a profundizar en el amor y a dar sentido a sus sensaciones y emociones. <img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==7 && signo2==10){
    texto=`<p>No es la combinación más cómoda del Cosmos por varias razones, pero eso no significa que no puedan aprender a estar juntos y amarse mucho. De hecho, si aprenden a apreciar y respetar las fortalezas y debilidades del otro, los dos pueden llegar a ser mucho mejor persona. solo hará falta paciencia y comprensión, y quizás una Luna y un Ascendente bien colocados.

Regido por el amante de los placeres, Venus, a Libra le preocupan una etiqueta social apropiada y una actitud refinada. Esto encaja bien con Capricornio, dado que Saturno hace que sea propenso a mostrar el mayor decoro. Libra (la exaltación de Saturno) es el signo del equilibrio y la justicia, lo cual encaja también bastante bien con Capricornio. De hecho, hay muchas razones para que Capricornio disfrute de la compañía de un amante Libra.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}

else if (signo1==7 && signo2==2){
    texto=`<p>La compatibilidad entre Libra y Tauro no es muy alta, por no decir baja y recomendamos mucho esfuerzo y comprensión por parte de los dos para hacer funcionar esta relación. Lo bueno es que a Libra y a Tauro les gustan los retos - y hacer perdurar esta relación supone, sin duda, un reto muy interesante.


Tanto Libra como Tauro están regidos por Venus, por lo que la atracción es inmediata. Libra es un signo de aire y estimula la mente de Tauro, mientras que el componente Tierra de éste puede asentar a Libra, frenando su dispersión mental.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}

else if (signo1==7 && signo2==5){
    texto=`<p>El sabroso mejunje de Libra, la Balanza, y Leo, el León, es exquisito. Libra es el punto focal de la elegancia en el zodiaco. Regido por Venus, el planeta del amor y el placer sensual, Libra busca una relación con una ferviente fascinación. Libra vive para el amor y el estilo. Leo es intrépido, brillante y muy animado. Tienen un nivel de compatiblidad muy alto.


El optimismo positivo y alentador de Leo hace, que haya mucha diversión a su alrededor. A Leo le encanta ser el centro de atención, pero también es un gran actor y tiene una fortaleza de gran corazón, condimentada con generosidad y una pizca de egocentrismo. Libra puede añadir algunos aromas creativos a la mezcla, aportando estilo y empuje<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}

else if (signo1==7 && signo2==11){
    texto=`<p>La compatibilidad entre Libra y Acuario es excelente

Ambos signos son sociables, les encanta conversar y disfrutan con reuniones y actos sociales. Los dos son muy extrovertidos y suelen tener muchos amigos. A los dos les gusta la independencia y por eso no será un problema dar y disfrutar de cierta libertad dentro de su relación.

Ambos signos son muy cariñosos
La diferencia es que Acuario tiende a dar o repartir su cariño entre muchas personas y causas, mientras que el tipo de amor, que siente Libra es mucho más personal.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}

else if (signo1==7 && signo2==4){
    texto=`<p>La compatibilidad a largo plazo entre Cáncer y Libra es una combinación de signos es bastante baja y solamente sobreviriá la pareja si hay una base de amor y pasión muy fuerte.

Una relación entre Cáncer y Libra es una de las relaciones más difíciles del Zodiaco, y en ocasiones dará lugar a un enorme malestar, a pesar de que al principio de la relación las diferencias no sean claras; tanto Cáncer como Libra buscan la paz, el sosiego y la armonía, por lo que al principio, la relación puede parecer muy sencilla.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}

else if (signo1==7 && signo2==9){
    texto=`<p>La combinación de Libra, la Balanza, y Sagitario, el Arquero, es muy buena. Libra es el punto focal de la elegancia en el zodíaco. Regido por Venus, el planeta de amor y el placer sensual, Libra busca una relación con una ferviente fascinación. Libra vive para el amor y el estilo.


Sagitario es aventurero y no se opone a la emoción de asumir riesgos. El optimismo positivo y alentador de Sagitario, hace que haya mucha diversión a su alrededor. A Sagitario le encanta cualquier forma nueva de expresión sexual que suponga un desafío y te entusiasme. Libra entiende esto y puede ciertamente añadir algunas ideas muy creativas a la relación, envueltas con mucho estilo.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}

else if (signo1==7 && signo2==1){
    texto=`<p>Aries y Libra son signos opuestos, lo cual puede ser bueno, al menos, al inicio de la relación por la atracción de opuestos. No obstante, a medida que el tiempo pasa la novedad desaparece, y puede que haya demasiadas diferencias para que la relación funcione a largo plazo, a menos que exista una base muy fuerte de amor y de buena voluntad por parte de ambos signos para adaptar su fuerte personalidad a la de su pareja.


Aries es muy resuelto y, a menudo, mandón, con tendencia a saltar a una conclusión, aunque esto implique cometer un extraño error de juicio. Libra, por su parte, es bastante testarudo, pero se toma su tiempo para tomar una decisión, procurando ver las cosas desde diferentes perspectivas. Esto suele exasperar a Aries, que puede tomar su indecisión como una ofensa personal en lugar de entender su motivo real.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}

else if (signo1==7 && signo2==3){
    texto=`<p>Géminis y Libra presentan una excelente compatibilidad, por lo que si esta es la combinación de tu relación hay muchas probabilidades de que seas extremadamente feliz durante mucho tiempo.

Incluso se trata de una combinación tan afortunada, que se podría decir que existe un toque de magia entre ambos signos. En ocasiones Libra y Géminis se entienden tan bien, que ni siquiera necesitan palabras.

Géminis y Libra suelen compenetrarse muy bien mutuamente. Los planetas, que rigen los signos de Libra y Géminis, Venus y Mercurio respectivamente, son íntimos amigos planetarios. <img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}

else if (signo1==7 && signo2==7){
    texto=`<p>Cuando el estiloso Libra encuentra a otro Libra, la atracción es inmediata. El gusto atrae al gusto. La magia favorable de esta unión Aire - Aire tiene sus retos pero, una vez resueltos, los dos disfrutarán de una pareja comprensiva y un romance de por vida.

El romance está en el aire cuándo dos Libra encuentran su equilibrio acrobático. Los temas del dormitorio serán apasionantes e incluso un poco extravagantes. Libra se verá fortalecido sólo con pensar en su ser querido y ambos se pueden estimular y refrescar mutuamente con una atención considerada. Un Libra, que siempre haya querido una pareja con gracia, buen gusto y a quién le encante hablar y sopesar las cosas tanto como él , debería buscar otro Libra.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}

else if (signo1==7 && signo2==12){
    texto=`<p>Libra y Piscis son una combinación inusual, pero la atracción entre ambos puede ser intensa. El aire y el agua no se mezclan fácilmente, por lo que Libra tendrá que estar atento a las necesidades de Piscis, incluso aunque no siempre entienda cuáles son. No es de ninguna manera una combinación fácil, pero cuándo funciona, tiene una calidad especial. Libra y Piscis no combinan fácilmente, pero esta unión puede ser algo especial si llegan a entenderse el uno al otro. No obstante, Piscis es conocido por elegir a la pareja equivocada. Si la cosa no cuaja, la atracción entre ambos podría apagarse lentamente.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}

else if (signo1==7 && signo2==6){
    texto=`<p>La compatibilidad de Libra con Virgo no es muy alta y para que funcione la relación ambos signos tendrán que transigir. No obstante, cuando funciona puede formarse una pareja muy equilibrada y muy especial, sobre todo cuando ambos logran convertir sus diferencias en un activo complementario para su pareja.

Virgo y Libra tienen distintos carácteres además de distintos temperamentos. Mientras que Virgo tiende a ser crítico, Libra no suele juzgar a las personas y no tiene problema en aceptar distintos puntos de vista - todo al contrario que Virgo que es mucho más exigente.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}

else if (signo1==8 && signo2==8){
    texto=`<p>Los dos son muy parecidos y, sin embargo, apenas se entienden mutuamente. La duplicidad del elemento Agua le imprime un profundo poder emocional y hace de lupa, que magnifica cada uno de los elementos de la compleja individualidad de ambos.


Esta combinación lleva la intuición a lo más alto o la hunde en lo más profundo, pero dado que ambos son signos Fijos, el mayor reto será cuándo los deseos individuales de ambos entren en conflicto. Si coinciden en algo, genial. Si no, cada uno de ellos estará preparado para no ceder el tiempo que haga falta hasta conseguir que se haga a su manera.

<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==8 && signo2==10){
    texto=`<p>Se trata de una combinación apasionada y fiel, y puede ser una de las mejores del Zodíaco. Incluso si no es una relación romántica, es probable, que los dos sean cariñosos mutuamente y se sientan muy cómodos con el contacto físico. Estos dos signos pueden ser amigos maravillosos, familiares, socios empresariales y compañeros.

Escorpio es famoso por ser seductor y apasionado y a Capricornio no le molestará ni lo más mínimo. Mientras Escorpio no seduzca a alguien más, Capricornio estará encantado de recibir tanta pasión y deseo. Escorpio no teme acercarse de verdad y con franqueza y eso impresiona a Capricornio. Otros pueden confundir la reserva de Capricornio con una actitud distante, pero en lo más profundo de su interior, la mayoría de los Capricornio estarían encantados de que alguien penetrara sus defensas.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==8 && signo2==2){
    texto=`<p>La compatibilidad entre Escorpio y Tauro es más alta de lo que podría parecer. Tauro y Escorpio son signos zodiacales opuestos y por eso, a veces, se atraen mutuamente sin remedio. Su primer encuentro podría ser sencillamente increíble y a Tauro le podría sorprender la pasión, que despierta su presencia. Dada la conexión que existe entre Marte y Venus hay muchas probabilidades de que surja una fuerte atracción magnética entre los dos signos Tauro y Escorpio.

A nivel intelectual ambos son menos propensos a encontrar una plataforma común, pero si lo hacen, ésta puede llegar a ser, con total seguridad, una de las mejores combinaciones amorosas del zodíaco, en cuanto a compatibilidad.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==8 && signo2==5){
    texto=`<p>La compatibilidad entre Escorpio y Leo es bastante baja. La atracción es enorme, pero el choque fuertes caracteres más. El romántico Leo, un Signo de Fuego, es autosuficiente y seguro y un amante ardiente, lleno de encanto personal y magnetismo físico...Un reto maravilloso. A pesar de su bravuconería, el intrépido pero sincero Leo se verá fascinado al instante por las estrategias de Escorpio y su legendario ingenio.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==8 && signo2==11){
    texto=`<p>La compatibilidad entre Escorpio y Acuario es bastante baja. Ambos tienen personalidades muy diferentes y su forma de enfocar la vida y las relaciones íntimas es muy distinto. Por otra parte, dónde sí se parecen es su actitud cabezota de imponerse al otro, querer tener siempre razón y las ganas de discutir. ¡Peligro! porque son actitudes, que les pueden llevar a la ruptura.

Los Escorpio son muy intensos, emocionales y apasionados mientras, que los Acuarios son mucho más equilibrados y prácticos. El Escorpio se deja llevar por su intuición e instinto, mientras que los Acuario parecen más frios, cerebrales y distantes.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==8 && signo2==4){
    texto=`<p>Las personas, que nacen bajo el mismo elemento suelen sentirse cómodas y atraerse entre sí. Este es el caso de Cáncer y Escorpio. Tiene un grado de compatibilidad alto. Ambos son sensibles, emocionales y cariñosos, pero Escorpio tiene un modo muy distinto de expresar el amor.

El amor de Escorpio es exigente y pide mucho más a cambio de lo que da. Los Escorpio también tienden, en general, a ser menos constantes.

Las personas, que nacen bajo el mismo elemento suelen sentirse cómodas y atraerse entre sí. Este es el caso de Cáncer y Escorpio. <img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==8 && signo2==9){
    texto=`<p>La pareja formado por Sagitario y Escorpio es una combinación muy difícil porque mientras el aventurero Sagitario adora los cambios y la exploración de horizontes lejanos, asumiendo todo tipo de riesgos (físicos, emocionales y espirituales) para, a continuación, pasar al siguiente gran reto.

Escorpio prefiere ir directamente al meollo de la relación, regocijándose en la exploración del compromiso y el poder emocional. Por lo tanto la compatibilidad entre ambos es baja.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==8 && signo2==1){
    texto=`<p>Aries y Escorpio es una combinación muy complicada y ambos signos deberán poner mucho de su parte, para que la relación funcione, debido a sus enormes diferencias entre sus carácteres. Sus planetas regentes, Marte y Saturno, son fuerzas diametralmente opuestas.


Aries tiende a ser extrovertido, seguro e impulsivo y no suele tomarse bien las críticas; mientras que los Escorpio son mucho más introvertidos, prácticos, conservadores e incluso, pesimistas.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==8 && signo2==3){
    texto=`<p>La compatibilidad entre Escorpio y Géminis es bastante baja y ambas partes de la relación deberán trabajar duramente para conseguir, que funcione. Si son lo suficientemente decididos, podría ser posible, pero deberán tener cuidado o se podrían ver envueltos en un escenario en el, que incluso dirigirse la palabra les resultaría difícil.

Géminis y Escorpio son totalmente opuestos entre sí en casi todos los aspectos de sus personalidades, de ahí que hacer que esta combinación zodiacal funcione sea todo un reto.

Escorpio es un individuo altamente emocional, que siempre forja relaciones profundas y significativas. Géminis, en cambio, difícilmente se ata a otra persona y la mayoría de sus relaciones amorosas tienden a ser superficiales hasta que encuentre a su verdadera media naranja.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==8 && signo2==7){
    texto=`<p>La pareja formada por Escorpio y Libra tiene la gran ventaja de ser una relación muy equilibrada porque la compatibilidad entre estos dos signos es altísima. Libra cuyo planeta es Venus representa el amor, la sensualidad y el placer. En cambio Escorpio está regido por Marte, que representa la acción, la estrategia y el ingenio; y por Plutón, el poder, el inframundo.

Son características muy complementarias porque son opuestos. Generalmente los opuestos se atraen, pero en este caso lo importante es que se complementan. Escorpio ayuda a tomar decisiones a Libra, que es tarea difícil para él, que se lo piensa todo mucho. Y Libra ayuda a Escorpio a profundizar en el amor y a dar sentido a sus sensaciones y emociones. <img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==8 && signo2==12){
    texto=`<p>La atracción de Escorpio y Piscis es irresistible, una unión con todas las posibilidades de éxito. Los dos son apasionados y leales, por lo que es fácil que disfruten de un compañerismo natural. Escorpio es un Signo Fijo, por lo que una vez que se compromete, se entrega totalmente. Escorpio y Piscis son Signos de Agua, por lo que fluyen de forma natural juntos, a menudo buscando un objetivo común como dos corrientes devienen en un río. Piscis y Escorpio se comunican de forma sutil, leyendo el estado de ánimo del otro y sus pensamientos. Los dos tienen el don de los sueños psíquicos y pueden llegar a saber cosas del pasado o futuro a través de sus sueños. <img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}
else if (signo1==8 && signo2==6){
    texto=`<p>La compatibilidad de Escorpio con Virgo es bastante alta, ya que la combinación de Tierra con Agua hace, que esta relación suela ser fructífera en muchos sentidos.

Ambos signos conectan muy bien, porque Virgo es el signo de amistad y realización para Escorpio, mientras que Escorpio representa el signo de comunicación para Virgo.  

Características Aries

Tanto Escorpio como Virgo tienen un enfoque práctico ante la vida. No obstante los Escorpio son mucho más aventureros, que el más prudente Virgo. Escorpio tendrá que asumir las reticencias de su pareja Virgo aunque no las comparta.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==9 && signo2==8){
    texto=`<p>La pareja formado por Sagitario y Escorpio es una combinación muy difícil porque mientras el aventurero Sagitario adora los cambios y la exploración de horizontes lejanos, asumiendo todo tipo de riesgos (físicos, emocionales y espirituales) para, a continuación, pasar al siguiente gran reto.


Escorpio prefiere ir directamente al meollo de la relación, regocijándose en la exploración del compromiso y el poder emocional. Por lo tanto la compatibilidad entre ambos es baja.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 
else if (signo1==9 && signo2==10){
    texto=`<p>Sagitario no parece tener mucho en común con Capricornio, pero aún así puede ser una combinación razonablemente buena. Los dos tendrán, que aprender a apreciar sus diferencias antes de poder sentirse cómodos juntos, pero una vez hecho esto, puede ser un equipo muy exitoso.


Sagitario está regido por el optimista y comunicativo Júpiter, que contrasta considerablemente con la naturaleza Saturnina, más conservadora y reservada.Sagitario podría acusar a Capricornio de ser un pesimista aguafiestas, mientras que Capricornio se ve a sí mismo como un realista práctico y digno de confianza. Sagitario puede desquiciar a Capricornio al ser tan quijotesco e irresponsable, pero él se ve a sí mismo como idealista y progresista. Lo más probable es que la verdad esté en algún lugar intermedio, pero puede ser difícil de ver para cualquiera de los dos.

<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 
else if (signo1==9 && signo2==2){
    texto=`<p>La compatibilidad entre Sagitario y Tauro es bastante baja porque son signos muy diferentes. Tauro es práctico y se preocupa por lo que puede tocar y sentir (el mundo de las cosas reales).


 
El estilo de vida de Sagitario no depende de la costumbre y la estructura como el de Tauro, sino que Sagitario tiende a basar su vida en una filosofía de libertad, independencia y espontaneidad. Es poco probable que pueda proporcionar a Tauro la seguridad y comodidad que éste necesita.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 
else if (signo1==9 && signo2==5){
    texto=`<p>El intrépido Leo y el aventurero Sagitario forman una combinación romántica natural; también pueden ser los mejores amigos. Dos signos de Fuego juntos encenderán pasiones abrasadoras en el dormitorio, dado que ambos entienden instintivamente las necesidades más profundas del otro. Su compatibilidad es muy alta. Para que el amor entre Leo y Sagitario funcionen tendrán que recordar qué les unió en un principio. Sus ganas de vivir, su impulsividad bien compartida, su pasión por la vida. Leo tendrá, que ser más paciente con el miedo de Sagitario al compromiso; y Sagitario tendrá que recordar, que Leo no sorporta a los irresponsables y miedicas, que no son capaces de afrontar las responsabilidades.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 
else if (signo1==9 && signo2==11){
    texto=`<p>La compatibilidad entre Sagitario y Acuario es bastante alta y si ambos se esfuerzan un poco, lo más probable es que su relación sea larga y feliz.


Son dos signos muy parecidos - extrovertidos, sociables y aventureros. Les encanta la diversión, son muy espontáneos, no son excesivamente emocionales o sentimentales y saben dar y disfrutar de cierta libertad dentro de la pareja.

Compatibilidad Acuario Sagitario

Tanto a Acuario como a Sagitario les gusta estar al día y conversar sobre acontecimientos en el ámbito de la política, la cultura y el mundo en general. A ambos les encantan las largas conversaciones, el intercambio de ideas, beneficiándose mutuamente de la inteligencia uno del otro.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 
else if (signo1==9 && signo2==4){
    texto=`<p>El grado de compatibilidad entre Cáncer y Sagitario es más bien bajo. Aunque hay una posibilidad de que Cáncer y Sagitario experimenten una fuerte atracción al conocerse, la relación puede no estar destinada a funcionar a largo plazo.


Cáncer es propenso a enamorarse perdidamente del fuerte carácter de Sagitario, pero una relación de amistad o profesional tiene más posibilidades de funcionar, que como pareja.

Sagitario es honesto, muy directo y, en ocasiones, insensible; y aunque los Cáncer aprecien la honestidad y la franqueza, son muy sensibles a las críticas.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 
else if (signo1==9 && signo2==9){
    texto=`<p>Dos Sagitarios juntos forman un equipo formidable. Algunos astrólogos piensan, que es la combinación perfecta y en muchas formas, es muy apropiada. Se pueden atraer con una conversación estimulante, dado que ambos tendrán intereses similares y cuándo a uno le apremie el impulso de empaquetar y partir a la aventura en busca de horizontes lejanos, el otro lo seguirá encantado.


 
Ambos son despreocupados e independientes, por lo que podrán tanto trabajar juntos fácilmente en los proyectos deseados, como complacerse mutuamente en la cama. Los celos raramente serán un problema, pero Sagitario tiene un pronto muy acusado y puede estallar por cualquier cosa. <img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 
else if (signo1==9 && signo2==1){
    texto=`<p>Tanto Aries como Sagitario son signos de Fuego, por lo que a esta combinación no le faltará nada de variedad y emoción, pudiendo ser, en ocasiones, explosiva. La relación despegará directamente desde su comienzo. Su grado de compatibilidad es muy alto.


Ambos signos tienen una capacidad de atención relativamente corta y necesitan cambios constantes, lo que determinará el tono de la relación. Los planetas que rigen ambos signos son muy amigos y esto garantiza una relación abierta y comunicativa.

Esta es una combinación de gran alegría y diversión y tanto Aries como Sagitario entienden que cada uno de ellos refleja algunas de las cualidades del otro. Esto garantizará un buen entendimiento básico y facilitará la comunicación.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 
else if (signo1==9 && signo2==3){
    texto=`<p>Esta combinación de energías planetarias resulta intrigante. Sagitario es el signo opuesto a Géminis y el que resulte bien o no dependerá de la perspectiva, que tomen ambos.

Esta mezcla de diferencias y similaridades en sus personalidades implica, que ambos deberán esforzarse un poco para que la relación funcione. Sobre todo, ambos necesitan ser libres para explorar sus propias vidas aunque mantengan una relación. Si lo hacen, si tienen bastantes posibilidades de que la relación funcione.


Géminis está tan interesado en los diversos aspectos de la vida como Sagitario. Los dos son muy inquietos y están casi siempre avanzando. Les resulta difícil aferrarse a un sitio o a una persona durante mucho tiempo.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 
else if (signo1==9 && signo2==7){
    texto=`<p>La combinación de Libra, la Balanza, y Sagitario, el Arquero, es muy buena. Libra es el punto focal de la elegancia en el zodíaco. Regido por Venus, el planeta de amor y el placer sensual, Libra busca una relación con una ferviente fascinación. Libra vive para el amor y el estilo.


Sagitario es aventurero y no se opone a la emoción de asumir riesgos. El optimismo positivo y alentador de Sagitario, hace que haya mucha diversión a su alrededor. Libra será un gran amigo y también un fabuloso amante. Apenas habrá problemas. Los comentarios desconsiderados pueden dañar los sentimientos del sensible Libra; por otro lado, Libra a veces puede ser demasiado controlador emocionalmente, para el gusto de Sagitario. Sin embargo, Libra es diplomático y puede calmar pronto los ánimos. Los dos tienen la capacidad de perdonar y olvidar.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 
else if (signo1==9 && signo2==12){
    texto=`<p>Piscis y Sagitario son complementarios y compatibles. Tanto el imaginativo Piscis como el aventurero Sagitario están regidos por Júpiter, el planeta de los sueños y amplios horizontes. Sagitario, como signo de Fuego, expresa el lado filosófico y viajero de Júpiter, pasando fácilmente de una escapada a otra, mientras Piscis, signo de Agua, tiene tendencia a ser introvertido y expresa el lado más profundo y espiritual de este maravilloso poder planetario.


Piscis se ve atraído por la maravillosa energía vital de Sagitario, mientras que a Sagitario le atrae la encantadora espiritualidad de Piscis.

<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 
else if (signo1==9 && signo2==6){
    texto=`<p>La compatibilidad de Sagitario con Virgo no es muy alta dadas las grandes diferencias, que existen entre estos dos signos. Mientras, que Virgo presta atención a los pequeños detalles, Sagitario tiende a centrarse en la visión global.


No obstante, la relación tiene una cosa muy importante a su favor - ambos signos son mutables lo que indica adaptabilidad. Esto quiere decir, que si aprenden a aceptar los puntos de vista del otro y a no considerar demasiado importantes sus propias opiniones, serán capaces de alcanzar el éxito en una relación.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 


else if (signo1==10 && signo2==8){
    texto=`<p>Se trata de una combinación apasionada y fiel, y puede ser una de las mejores del Zodíaco. Incluso si no es una relación romántica, es probable, que los dos sean cariñosos mutuamente y se sientan muy cómodos con el contacto físico. Estos dos signos pueden ser amigos maravillosos, familiares, socios empresariales y compañeros.


Escorpio es famoso por ser seductor y apasionado y a Capricornio no le molestará ni lo más mínimo. Mientras Escorpio no seduzca a alguien más, Capricornio estará encantado de recibir tanta pasión y deseo. Escorpio no teme acercarse de verdad y con franqueza y eso impresiona a Capricornio.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 
else if (signo1==10 && signo2==10){
    texto=`<p>Esta puede ser una combinación muy compatible, pero también podría adolecer del síndrome de 'demasiado buena' . Si ambos tienen suficientes intereses diferentes como para evitar caer en la rutina y consiguen mantener un equilibrio sano de poder, podría ser una relación muy feliz.


Dado que los dos están influenciados por el sobrio y conservador Saturno, no es probable que se trate de una relación casual. Incluso si solo son conocidos, tenderán a tomarse muy en serio mutuamente. La mayoría de los Capricornios experimentan problemas significativos en la infancia, pero suelen resolverlos con el paso del tiempo. Y alcanzan su plenitud en la madurez.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==10 && signo2==2){
    texto=`<p>La compatibilidad entre Capricornio y Tauro es muy alta, porque tienen mucho en común y pueden esperar ser muy felices juntos. El sentido práctico de Capricornio se lleva bien con la actitud realista de Tauro. Su conexión inicial con Capricornio será buena y Tauro encontrará muchas similitudes con su pareja.


Tanto Tauro como Capricornio ven la vida con un enfoque práctico. Ambos son realistas y viven en el mundo real. Y en lo, que se refiere a los aspectos espirituales y filosóficos de la vida, también muestran una gran compatibilidad. La combinación amorosa entre estos dos signos del zodíaco estará basada en la confianza mútua, además de formalidad y coherencia.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==10 && signo2==5){
    texto=`<p>Capricornio y Leo son una pareja muy improbable, pero a veces esta combinación puede funcionar muy bien. Parece haber una conexión kármica entre ambos, especialmente si están conectados por una relación familiar. Si ambos dejan a un lado su orgullo y trabajan juntos por un fin común, podría ser una relación muy gratificante. Su grado de compatibilidad podrían ser bueno.


Leo está regido por el Sol y tiene un sentido natural de orgullo y dignidad. El León o la Leona quiere tener buen aspecto para el resto del mundo y apreciará los elevados estándares de la naturaleza conservadora y sólida de Capricornio. <img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==10 && signo2==11){
    texto=`<p>La compatibilidad entre Capricornio y Acuario puede ser bastante alta
Si los dos logran que las importantes diferencias que existen entre ellos, se conviertan en un punto positivo de la pareja. Si no, la relación será muy tormentosa y es probable, que lejos de complementarse, los dos terminen completamente agotados


Los Acuarios son creativos, hábiles y tienen una gran capacidad de adaptación a los cambios de su entorno y de su vida en general y son capaces de comprender cada detalle de cada situación.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==10 && signo2==4){
    texto=`<p>La Compatibilidad entre Cáncer y Capricornio es már bien baja. A pesar de las importantes diferencias entre los signos de Cáncer y Capricornio, es posible que se establezca una relación entre los dos, aunque ambos deberán poner un poco de su parte. Mientras que los Cáncer son cariñosos y expresivos, a Capricornio le cuesta expresar sus sentimientos.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==10 && signo2==9){
    texto=`<p>Sagitario no parece tener mucho en común con Capricornio, pero aún así puede ser una combinación razonablemente buena. Los dos tendrán, que aprender a apreciar sus diferencias antes de poder sentirse cómodos juntos, pero una vez hecho esto, puede ser un equipo muy exitoso.


Sagitario está regido por el optimista y comunicativo Júpiter, que contrasta considerablemente con la naturaleza Saturnina, más conservadora y reservada.Sagitario podría acusar a Capricornio de ser un pesimista aguafiestas, mientras que Capricornio se ve a sí mismo como un realista práctico y digno de confianza. <img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==10 && signo2==1){
    texto=`<p>Es una combinación muy complicada y su grado de compatibilidad es bajo. Ambos signos deberán poner mucho de su parte para que la relación funcione, debido a sus enormes diferencias entre sus carácteres. Sus planetas regentes, Marte y Saturno, son fuerzas diamétricamente opuestas.


Aries tiende a ser extrovertido, seguro e impulsivo y no suele tomarse bien las críticas, mientras que los Capricornio son mucho más introvertidos, prácticos, conservadores e incluso, pesimistas. <img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==10 && signo2==3){
    texto=`<p>La compatibilidad de Capricornio con Géminis es bastante baja, dada la forma tan distinta, que tienen de enfocar la vida. A ambos signos tendrán, que hacer un gran esfuerzo para que la relación funcione a largo plazo.


A Capricornio le gusta avanzar en la vida de forma sistemática, siguiendo planes formulados para evitar sorpresas o imprevistos en su camino. Y aunque se convierte en un proceso monótono y tedioso, Capricornio no dejará de seguir avanzando hacia su objetivo hasta llegar a conseguirlo.

<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==10 && signo2==7){
    texto=`<p>No es la combinación más cómoda del Cosmos por varias razones, pero eso no significa que no puedan aprender a estar juntos y amarse mucho. De hecho, si aprenden a apreciar y respetar las fortalezas y debilidades del otro, los dos pueden llegar a ser mucho mejor persona. solo hará falta paciencia y comprensión, y quizás una Luna y un Ascendente bien colocados.

Regido por el amante de los placeres, Venus, a Libra le preocupan una etiqueta social apropiada y una actitud refinada. Esto encaja bien con Capricornio, dado que Saturno hace que sea propenso a mostrar el mayor decoro. Libra (la exaltación de Saturno) es el signo del equilibrio y la justicia, lo cual encaja también bastante bien con Capricornio. De hecho, hay muchas razones para que Capricornio disfrute de la compañía de un amante Libra.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==10 && signo2==12){
    texto=`<p>Piscis es una combinación excelente para Capricornio, aunque al principio pueda haber dudas. Piscis es un soñador y puede parecer frágil, pero a veces una sutil entereza se puede confundir con debilidad. Las fortalezas combinadas de ambos ayudan a compensar sus debilidades individuales, y juntos forman un equipo sólido y satisfactorio.


Piscis, un signo Mutable, suele estar dispuesto a seguir el liderazgo Cardinal de Capricornio en los asuntos conjuntos. No es que Piscis no pueda encontrar su propio camino en la vida... De hecho, hay muchos Piscis ambiciosos. Es sólo que, normalmente, Piscis prefiere ser un apoyo en lugar de protagonizar el espectáculo.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==10 && signo2==6){
    texto=`<p>La compatibilidad de Capricornio con Virgo es muy alta gracias a una combinación de elementos similares, que da una buena base para su relación. Virgo tendrá una compenetración inmediata con Capricornio. Por algún motivo, Capricornio parece menos serio, para Virgo que para otros signos del Zodiaco.


Ambos signos son sensatos y prácticos, pero con algunas diferencias. Por ejemplo, los Virgo suelen estar más interesados en ofrecer un servicio práctico y claro que los Capricornio a quienes les interesa más el éxito. A Ambos signos son realistas, leales y poseen la madurez necesaria para encontrar soluciones reales para problemas difíciles.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
}

else if (signo1==11 && signo2==8){
    texto=`<p>La compatibilidad entre Escorpio y Acuario es bastante baja. Ambos tienen personalidades muy diferentes y su forma de enfocar la vida y las relaciones íntimas es muy distinto. Por otra parte, dónde sí se parecen es su actitud cabezota de imponerse al otro, querer tener siempre razón y las ganas de discutir. ¡Peligro! porque son actitudes, que les pueden llevar a la ruptura.

Los Escorpio son muy intensos, emocionales y apasionados mientras, que los Acuarios son mucho más equilibrados y prácticos. El Escorpio se deja llevar por su intuición e instinto, mientras que los Acuario parecen más frios, cerebrales y distantes.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==11 && signo2==10){
    texto=`<p>La compatibilidad entre Capricornio y Acuario puede ser bastante alta
Si los dos logran que las importantes diferencias que existen entre ellos, se conviertan en un punto positivo de la pareja. Si no, la relación será muy tormentosa y es probable, que lejos de complementarse, los dos terminen completamente agotados


Los Acuarios son creativos, hábiles y tienen una gran capacidad de adaptación a los cambios de su entorno y de su vida en general y son capaces de comprender cada detalle de cada situación.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==11 && signo2==2){
    texto=`<p>La compatibilidad entre Acuario y Tauro no es muy alta debido a las incompatibilidades, que existen entre ellos. Pero sí tiene muchas posibilidades siempre y cuando ambos estén dispuestos a esforzarse para que funcione.


Tauro cree en la simplicidad y el sentido práctico de las cosas. Su enfoque de la vida es realista, convencional y sensible. Por otro lado, Acuario tiende a ir en contra de las normas y creer en un enfoque más contemporáneo y progresista.Compatibilidad Sagitario-Sagitario

Tauro se resiste a los cambios, le gustan las cosas tal como son. Acuario, en cambio, prefiere ir al ritmo de los tiempos y evolucionar, cambiar con el mundo. Aunque puede que esto no sea muy grave, podría causar algunos problemas de compatibilidad.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==11 && signo2==5){
    texto=`<p>La compatibilidad entre Leo y Acuario es alta
A los Acuario les gusta el calor, la generosidad y la energía de Leo mientras, que a los Leo les impresiona la capacidad intelectual y la seguridad de Acuario.

Los dos signos son muy distintos, pero a pesar de sus diferencias logran atraerse e impresionarse. Son signos opuestos que se atraen o como ya se ha demostrado en Astrología, esto podría ser una ventaja en el caso de Leo y Acuario.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==11 && signo2==11){
    texto=`<p>La compatibilidad entre dos Acuario es alta
Ya que no hay ningún signo con mayor capacidad para comprender el signo y de no sentirse amenazado por su forma de ser tan distinta y singular.


Acuario es extrovertido, sociable y le encanta formar parte de un grupo. También tiene un lado solitario e independiente, a veces siente la necesidad de estar solo consigo mismo.

Esta aparente contradicción supone un problema para muchos signos, pero otro Acuario, lejos de sentirse amenazado o rechazado, comprenderá perfectamente y compartirá perfectamente ese deseo de soledad.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==11 && signo2==4){
    texto=`<p>La combinación de los signos Cáncer y Acuario presenta muchos retos en una pareja. La compatibilidad es baja a primera vista, aunque gracias a que ambos signos son muy persistentes, si hay suficientemente amor y disposición de esforzarse, una relación duradera es difícil, pero no imposible.

 El gusto por la libertad y la independencia de Acuario, frente a la rigidez y conservadurismo de Cáncer, puede ser una combinación un poco difícil de llevar, sobre todo para los Cáncer a los que les puede causar inseguridad y resentimiento.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==11 && signo2==9){
    texto=`<p>La compatibilidad entre Sagitario y Acuario es bastante alta y si ambos se esfuerzan un poco, lo más probable es que su relación sea larga y feliz.


Son dos signos muy parecidos - extrovertidos, sociables y aventureros. Les encanta la diversión, son muy espontáneos, no son excesivamente emocionales o sentimentales y saben dar y disfrutar de cierta libertad dentro de la pareja.

Compatibilidad Acuario Sagitario

Tanto a Acuario como a Sagitario les gusta estar al día y conversar sobre acontecimientos en el ámbito de la política, la cultura y el mundo en general.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==11 && signo2==1){
    texto=`<p>Aries y Acuario tienen mucho en común y un grado de compatibilidad muy alto. Ambos signos son independientes, humanitarios, optimistas y entusiastas. Les gustan las emociones fuertes, la valentía y carácter progresivo de los Acuario tienden a atraer mucho a los Aries.


Los Acuario se interesan mucho por cuestiones sociales. Loa Aries son muy trabajadores y ambiciosos, lo cual ayudará mucho a Acuario a satisfacer sus sueños de transformar la sociedad.

Compatibilidad Aries-Acuario

Acuario y Aries, forman un buen tendem como amigos. aunque no llegue a convertirse en una relación sentimental. <img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==11 && signo2==3){
    texto=`<p>La compatibilidad entre los signos Acuario y Géminis es muy alta, ya que ambos esperan sacar más o menos lo mismo de la vida.


Tienen planteamientos muy parecidos e incluso a nivel intelectual son compatibles. Es una de las combinaciones más compatibles del zodiaco, porque la conexión kármica es muy fuerte.

Una pareja de Géminis y Acuario disfrutan en la compañía del otro. Les encanta hablar durante horas, y comparten los mismos intereses, las mismas aficiones, las mismas opiniones e incluso los mismos amigos.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==11 && signo2==7){
    texto=`<p>La compatibilidad entre Libra y Acuario es excelente

Ambos signos son sociables, les encanta conversar y disfrutan con reuniones y actos sociales. Los dos son muy extrovertidos y suelen tener muchos amigos. A los dos les gusta la independencia y por eso no será un problema dar y disfrutar de cierta libertad dentro de su relación. La diferencia es que Acuario tiende a dar o repartir su cariño entre muchas personas y causas, mientras que el tipo de amor, que siente Libra es mucho más personal.

Ambos son signos de aire y esto favorece la comunicación y afinidad.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==11 && signo2==12){
    texto=`<p>La compatibilidad entre Piscis y Acuario no es muy alta
Y para, que una relación de pareja sea duradera, tendrá que haber una base sólida de amor y comprensión, así como mucho interés por parte de ambos signos. Sin embargo, la compatibilidad para una relación de amigos es mayor.

Es posible que Acuario sea incapaz de entregarse y mimar a Piscis tal como él necesita. Por otra parte, la confianza podría suponer un problema, sobre todo al principio de una relación, cuando ambos signos quieren compartir secretos de su pasado.

<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==11 && signo2==6){
    texto=`<p>La compatibilidad de Acuario con Virgo es una de las más bajas del Zodiaco y tendrá, que haber mucho amor para que esta relación tenga posibilidades a largo plazo. Nada es imposible y todo con esfuerzo se consigue, así que si esta es la combinación de su relación, ¡Manos a la obra!


Las compatibilidades entre Virgo y Acuario no serán muy obvias. Acuario y Virgo no se suelen atraer mutuamente por naturaleza y es más probable, que se conozcan por una situación de trabajo o un proyecto de estudios.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==12 && signo2==8){
    texto=`<p>La atracción de Escorpio y Piscis es irresistible, una unión con todas las posibilidades de éxito. Los dos son apasionados y leales, por lo que es fácil que disfruten de un compañerismo natural. Escorpio es un Signo Fijo, por lo que una vez que se compromete, se entrega totalmente.

  Escorpio se debería considerar afortunado si un Piscis se compromete con él. Con el afortunado Júpiter como guía, alguna de esa fortuna se le podría contagiar. Escorpio, a su vez, puede ser un escudo que proteja al sensible Piscis de un mundo que, en ocasiones, es demasiado para él. <img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==12 && signo2==10){
    texto=`<p>Piscis es una combinación excelente para Capricornio, aunque al principio pueda haber dudas. Piscis es un soñador y puede parecer frágil, pero a veces una sutil entereza se puede confundir con debilidad. Las fortalezas combinadas de ambos ayudan a compensar sus debilidades individuales, y juntos forman un equipo sólido y satisfactorio.


Piscis, un signo Mutable, suele estar dispuesto a seguir el liderazgo Cardinal de Capricornio en los asuntos conjuntos. No es que Piscis no pueda encontrar su propio camino en la vida... De hecho, hay muchos Piscis ambiciosos.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==12 && signo2==2){
    texto=`<p>La compatibilidad entre Piscis y Tauro es muy buena aunque sobre todo desde el punto de vista de compañerismo y actividad social. Si una pareja Tauro-Piscis decide separarse, lo más seguro es que logren conservar una excelente amistad que puede incluso llegar a incomodar a futuras parejas.


Tanto Tauro como Piscis tienen una actitud comprensiva, personalidad despreocupada y disposición amigable. A ambos les encanta mantener la armonía en sus relaciones. Piscis mostrará ternura, benevolencia y apoyo; y esto atraerá enormemente a Tauro.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==12 && signo2==5){
    texto=`<p>Leo se sentirá atraído por el sexy, pero vulnerable, Piscis. Piscis también se siente atraído por el León, al percibir que Leo tiene un corazón cálido y una fuerza interior que puede estar ahí para él cuando los terrores de la noche acechen. Su compatibilidad y complementariedad pueden ser muy grandes. <img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==12 && signo2==11){
    texto=`<p>Aries y Acuario tienen mucho en común y un grado de compatibilidad muy alto. Ambos signos son independientes, humanitarios, optimistas y entusiastas. Les gustan las emociones fuertes, la valentía y carácter progresivo de los Acuario tienden a atraer mucho a los Aries.


Los Acuario se interesan mucho por cuestiones sociales. Loa Aries son muy trabajadores y ambiciosos, lo cual ayudará mucho a Acuario a satisfacer sus sueños de transformar la sociedad.

<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==12 && signo2==4){
    texto=`<p>Piscis y Cáncer tienen mucho en común, especialmente en cuanto a compatibilidad emocional. Ambos signos se entienden instintivamente entre sí y sienten las necesidades del otro. Ambos son cariñosos y dan apoyo a su pareja. Uno de los peligros de tanta similitud es que, ambos pueden cambiar de opinión y de dirección con facilidad. Para que una relación prospere y se haga más fuerte, ambos signos deberán esforzarse por evitar el sentimentalismo excesivo y dar a su vida una dirección conjunta.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==12 && signo2==9){
    texto=`<p>Piscis y Sagitario son complementarios y compatibles. Tanto el imaginativo Piscis como el aventurero Sagitario están regidos por Júpiter, el planeta de los sueños y amplios horizontes. Sagitario, como signo de Fuego, expresa el lado filosófico y viajero de Júpiter, pasando fácilmente de una escapada a otra, mientras Piscis, signo de Agua, tiene tendencia a ser introvertido y expresa el lado más profundo y espiritual de este maravilloso poder planetario.


Piscis se ve atraído por la maravillosa energía vital de Sagitario, mientras que a Sagitario le atrae la encantadora espiritualidad de Piscis.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==12 && signo2==1){
    texto=`<p>Una pareja Aries y Piscis es una combinación difícil con bastantes retos, porque a pesar de una fuerte atracción inicial, existen diferencias importantes entre estos dos signos, que tendrán que ser superadas para que una relación de pareja funcione a largo plazo. Si logran formar una pareja estable, es probable que sea una relación fuera de lo común. Aries intentará cambiar algunos rasgos de Piscis, que no son muy compatible con los Aries, pero lo tendrá que hacer con mucho tacto. Aries es un signo muy optimista, mientras Piscis tiende a ser mucho más pesimista y cauteloso. <img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==12 && signo2==3){
    texto=`<p>La compatibilidad entre Piscis y Géminis no es una de las más altas de estos signos y ambos tendrán, que esforzarse para hacer, que la relación funcione. Sus elementos de aire y agua son muy distintos porque mientras, que el Aire está relacionado con la mente, el Agua está relacionado con las emociones.


Piscis y Géminis tienen algunas cosas en común. Ambos están abiertos a nuevas ideas, son flexibles, transigentes y dispuestos a cambiar de postura si se equivocan.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==12 && signo2==7){
    texto=`<p>Libra y Piscis son una combinación inusual, pero la atracción entre ambos puede ser intensa. El aire y el agua no se mezclan fácilmente, por lo que Libra tendrá que estar atento a las necesidades de Piscis, incluso aunque no siempre entienda cuáles son. No es de ninguna manera una combinación fácil, pero cuándo funciona, tiene una calidad especial. Libra y Piscis no combinan fácilmente, pero esta unión puede ser algo especial si llegan a entenderse el uno al otro. No obstante, Piscis es conocido por elegir a la pareja equivocada. Si la cosa no cuaja, la atracción entre ambos podría apagarse lentamente.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==12 && signo2==12){
    texto=`<p>Piscis, el Signo de los Peces, es un Signo de Agua. Dos peces juntos pueden crear un paraíso privado o un infierno en la tierra, dependiendo de si eligen nadar río abajo o contra corriente. Si bien los dos se sienten irresistiblemente atraídos el uno por el otro, ambos son propensos a perderse en sueños y fantasías.  Si logran comprometerse con unos objetivos prácticos y realistas juntos, tendrán una excelente posibilidad de éxito. Puesto que los dos son Signos Mutables, la comunicación fluirá casi sin esfuerzo. De hecho, la mayoría de las parejas Piscis hablan de un vínculo telepático entre ambos.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==12 && signo2==3){
    texto=`<p>La compatibilidad de Piscis con Virgo es muy buena a pesar de una contradicción entre los dos signos.


Son dos signos opuestos: algo que paradójicamente en Astrología se suele considerar como un indicador positivo de amor y matrimonio. Al mismo tiempo, sus enfoques de la vida son muy diferentes y sus personalidades también.<img src="imagenes/ariesicon.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==5 && signo2==8){
    texto=`<p>La compatibilidad entre Escorpio y Leo es bastante baja. La atracción es enorme, pero el choque fuertes caracteres más. El romántico Leo, un Signo de Fuego, es autosuficiente y seguro y un amante ardiente, lleno de encanto personal y magnetismo físico...Un reto maravilloso. A pesar de su bravuconería, el intrépido pero sincero Leo se verá fascinado al instante por las estrategias de Escorpio y su legendario ingenio.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==5 && signo2==10){
    texto=`<p>Capricornio y Leo son una pareja muy improbable, pero a veces esta combinación puede funcionar muy bien. Parece haber una conexión kármica entre ambos, especialmente si están conectados por una relación familiar. Si ambos dejan a un lado su orgullo y trabajan juntos por un fin común, podría ser una relación muy gratificante. Su grado de compatibilidad podrían ser bueno.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==5 && signo2==2){
    texto=`<p>La compatibilidad entre Leo y Tauro es alta, siempre y cuando los dos signos asuman sus diferencias y las gestionen de forma inteligente y evitando su habitual terquedad. La terquedad de los Tauro también forma parte de las características de Leo. Ambos poseen una gran determinación y se aferran a una decisión una vez que la han tomado. Esta combinación zodiacal mostrará, muy probablemente, signos de permanencia, firmeza y devoción, a pesar de producirse fuertes peleas en ocasiones.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==5 && signo2==5){
    texto=`<p>A Leo le encantará el regio y magnífico sentido de concienciación social, interés por la sociedad y habilidad natural para dirigir de su pareja. Leo puede ser mandón, vanidoso y exigente, también puede ser posesivo (por orgullo y necesidad de ser el centro de atención), pero siempre es leal y sincero, y siempre cuida la fidelidad. Por ello ambos deben rodearse de una corte de sirvientes como es debido y, así, tener adulación de sobra alrededor.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==5 && signo2==11){
    texto=`<p>A los Acuario les gusta el calor, la generosidad y la energía de Leo mientras, que a los Leo les impresiona la capacidad intelectual y la seguridad de Acuario.

Los dos signos son muy distintos, pero a pesar de sus diferencias logran atraerse e impresionarse. Son signos opuestos que se atraen o como ya se ha demostrado en Astrología, esto podría ser una ventaja en el caso de Leo y Acuario.

Leo exige más intensidad en una relación de pareja que Acuario. Si existe amor entre ambos, esto puede llegar a ser una ventaja para la pareja en lugar de ser un problema. Si Acuario logra que su pareja Leo no tome la vida tan en serio, y a su vez, Leo logra enseñar a Acuario a centrarse un poco más, ambos saldrían ganando. Funcionarían muy bien<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==5 && signo2==6){
    texto=`<p>La compatibilidad de Leo con Virgo es regular, y ambos signos tendrán, que trabajar bastante para que la relación sea duradera.

La personalidad de Leo es muy distinta a la de Virgo. Leo busca ser el centro de atención, mentras que Virgo es una persona mucho más privada.

Virgo-Leo resulta pues una combinación complicada, en la que las principales fuerzas son el poder de la mente (Virgo) frente al ego (Leo) y, para que funcione, ambos signos deben hacer un esfuerzo.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 

else if (signo1==5 && signo2==4){
    texto=`<p>Cáncer-Leo es una combinación es muy compatible. Tanto Cáncer como Leo tienen un ego bastante frágil, son vulnerables y no encajan bien la crítica, porque se ofenden con facilidad. Ambos signos necesitan cariño y mucha atención de su pareja.

El entusiasta y seguro Leo podría ser la solución perfecta para la inseguridad y la falta de confianza en sí mismos de los Cáncer, dada la capacidad de Leo para levantar el ánimo y hacer, que los otros se sientan mejor.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 
else if (signo1==5 && signo2==9){
    texto=`<p>La disposición y el optimismo natural de Sagitario, para asumir riesgos se ven reflejados y respaldados por la profunda fuerza y el poderoso corazón de Leo. Juntos hacen un gran equipo y la relación será apasionante.

El intrépido Leo y el aventurero Sagitario forman una combinación romántica natural; también pueden ser los mejores amigos. Dos signos de Fuego juntos encenderán pasiones abrasadoras en el dormitorio, dado que ambos entienden instintivamente las necesidades más profundas del otro. Su compatibilidad es muy alta.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 
else if (signo1==5 && signo2==1){
    texto=`<p>La atracción inmediata entre Aries y Leo es muy fuerte y tanto Aries como Leo crecerán en compañía uno del otro y querrán conocer mejor a su pareja a todos los niveles, físicamente, mentalmente, emocionalmente e incluso, espiritualmente. Por lo tanto, la compatibilidad entre Aries y Leo es altísima.

Ambos son signos de fuego, lo cual puede dar lugar a algunas confrontaciones y a un choque de egos. Sin embargo, la compatibilidad es alta y Aries y Leo compartirán una gran vida social y una relación de compromiso sentimental a largo plazo, si consiguen compartir el protagonismo.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 
else if (signo1==5 && signo2==3){
    texto=`<p>La compatibilidad entre Leo y Géminis es bastante alta y en esta relación ambos descubrirán tener mucho en común. Tanto a Géminis como a Leo les encanta divertirse.

Los dos tienen una naturaleza aventurera y disfrutan de la vida. Se encontrarán mutuamente fascinantes y disfrutarán en compañía del otro.

Leo está al mismo nivel intelectual que Géminis, por lo que sus conversaciones serán muy interesantes y satisfactorias para ambos.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 
else if (signo1==5 && signo2==7){
    texto=`<p>Tienen un nivel de compatiblidad muy alto.

A Leo le encanta la pose artística, elegante y tranquila de Libra, y a Libra le fascinan las ganas de vivir y el seguro aire de mando de Leo. El enfoque juguetón e imaginativo de Libra ante el amor combina a la perfección con el brío y la energía de Leo.<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 
else if (signo1==5 && signo2==12){
    texto=`<p>Piscis es idealista, incluso místico, y ambos causan intriga en el otro por la fascinación de la diferencia. No obstante, Leo deberá tener cuidado de no abrumar a esta extraña y cautelosa criatura, dado que la activa naturaleza extrovertida de Leo no encaja demasiado bien con la introspección del soñador Piscis. Piscis también puede ser bastante engañoso, incluso deshonesto en ocasiones, lo que no encaja particularmente bien con el carácter orgulloso y positivo de Leo.

Dado que Leo solo es feliz estando en el centro del candelero, un toque de admiración (concretamente, el hecho de que Piscis centre toda su atención en Leo), les llevará a un intercambio de energías mutuamente satisfactorio, al menos por un tiempo<img src="imagenes/balloons.png"></p>`
    validar.innerHTML=texto
        validar.style.setProperty("visibility","visible")
        validar.style.setProperty("opacity","1")
        validar.style.setProperty("transition","all 1s ease")  
     
} 



})