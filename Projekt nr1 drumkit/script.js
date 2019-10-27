document.addEventListener('DOMContentLoaded' ,function(){
})
        const clap = document.querySelector('#aClap')
        const boom = document.querySelector('#aBoom')
        const hihat = document.querySelector('#aHihat')
        const kick = document.querySelector('#aKick')
        const openhat = document.querySelector('#aOpenhat')
        const ride = document.querySelector('#aRide')
        const snare = document.querySelector('#aSnare')
        const tink = document.querySelector('#aTink')
        const tom = document.querySelector('#aTom')
        const ch1RecBtn = document.querySelector('#channel1RecBtn')
        const ch1PlayBtn = document.querySelector('#channel1PlayBtn')
        const channel1 = []
        const channel2 = []
        const channel3 = []
        const channel4 = []
        let channel1StartTime = 0
        let channel2StartTime = 0
        let channel3StartTime = 0
        let channel4StartTime = 0
        document.body.addEventListener('keypress', playAudio)
        document.querySelector('#channel1RecBtn').addEventListener('click' , recChannel1)
        document.querySelector('#channel2RecBtn').addEventListener('click' , recChannel2)
        document.querySelector('#channel3RecBtn').addEventListener('click' , recChannel3)
        document.querySelector('#channel4RecBtn').addEventListener('clikc' , recChannel4)
        document.querySelector('#channel1PlayBtn').addEventListener('click', playChannel1)
        document.querySelector('#channel2PlayBtn').addEventListener('click', playChannel2)
        document.querySelector('#channel3PlayBtn').addEventListener('click', playChannel3)
        document.querySelector('#channel4PlayBtn').addEventListener('click', playChannel4)
        
        function recChannel1() {
            channel1StartTime = Date.now()
            }
        function recChannel2(){
            channel2StartTime = Date.now()
        }
        function recChannel3(){
            channel3StartTime = Date.now()
        }    
        function recChannel4(){
            channel4StartTime = Date.now()
        }
      
        function playChannel1() {
            channel1.forEach(el => { 
                setTimeout(playSound, el.time, el.code)
            })
        }
        function playChannel2() {
            channel2.forEach(el => { 
                setTimeout(playSound, el.time, el.code)
            })
        }
        function playChannel3() {
            channel3.forEach(el => { 
                setTimeout(playSound, el.time, el.code)
            })
        }
        function playChannel4() {
            channel4.forEach(el => { 
                setTimeout(playSound, el.time, el.code)
            })
        }
        function playSound(code) {
            switch (code) {
                case 'KeyA':
                    boom.currentTime = 0
                    boom.play()
                    break
                case 'KeyS':
                    clap.currentTime = 0
                    clap.play()
                    break
                case 'KeyD':
                    hihat.currentTime = 0
                    hihat.play()
                    break
                case 'KeyF' :
                    kick.currentTime = 0
                    kick.play()
                    break
                case 'KeyH' :
                    openhat.currentTime=0
                    openhat.play()
                    break
                case 'KeyJ':
                    ride.currentTime=0
                    ride.play()
                    break
                case 'KeyK':
                    snare.currentTime=0
                    snare.play()
                    break
                case 'KeyL':
                    tink.currentTime=0
                    tink.play()
                    break
                case 'KeyN':
                    tom.currentTime=0
                    tom.play()
                    break                       
            }
        }
        function playAudio(e) {
            playSound(e.code)
            const time1 = Date.now() - channel1StartTime
            const time2 = Date.now() - channel2StartTime
            const time3 = Date.now() - channel3StartTime
            const time4 = Date.now() - channel4StartTime
            channel1.push({
                code: e.code,
                time: time1
            })
            channel2.push({
                code: e.code,
                time: time2
            })
            channel3.push({
                code: e.code,
                time: time3
            })
            channel4.push({
                code: e.code,
                time: time4
            })
            console.log(channel1)
        }