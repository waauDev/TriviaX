"use client"

export const Promo =()=>{
    return(
        <div className="border-2 rounded-xl p-4 space-y-4">
            <div className="flex items-center gap-x-2 flex-1">
                <h3 className="font-bold text-lg">
                🎮 ¡Prepárate para el reto definitivo de trivia! 🧠✨
                </h3>
                
            </div>
            <p className="text-muted-foreground">
                    ✅ Cada misión acertada te da +10 puntos.</p>
            <p className="text-muted-foreground">        
                    ❌ ¡Pero cuidado! Si fallas, perderás 1 vida (¡tienes hasta 5!) ❤️</p>	
                    
            <p className="text-muted-foreground">🔁 ¿Te quedaste sin vidas? ¡No te preocupes! Puedes canjear tus puntos por más vidas y seguir jugando 🪙➡️❤️</p>

            <p className="text-muted-foreground">¿Listo para demostrar qué tanto sabes? ¡El juego te espera! 🚀🔥</p>
            

                
        </div>
    )
}