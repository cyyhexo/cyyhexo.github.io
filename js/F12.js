var ConsoleManager={
            onOpen:function(){
                alert("Console is opened")
            },
            onClose:function(){
                alert("Console is closed")
            },
            init:function(){
                var self = this;
                var x = document.createElement('div');
                var isOpening = false,isOpened=false;
                Object.defineProperty(x, 'id', {
                    get:function(){
                        if(!isOpening){
                            self.onOpen();
                            isOpening=true;
                        }
                        isOpened=true;
                    }
                });
                setInterval(function(){
                    isOpened=false;
                    console.info(x);
                    console.clear();
                    if(!isOpened && isOpening){
                        self.onClose();
                        isOpening=false;
                    }
                },200)
            }
        }

        ConsoleManager.onOpen = function(){
            //打开控制台，跳转到百度
            try{
                window.open('http://localhost:4000/',target='_self');
            }catch(err){
                var a = document.createElement("button");
                    a.onclick=function(){
                    window.open('http://localhost:4000/',target='_self');
                }
                a.click();
            }
        }
        ConsoleManager.onClose = function(){
            alert("Console is closed!!!!!")
        }
        ConsoleManager.init();