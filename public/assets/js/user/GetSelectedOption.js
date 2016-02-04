

var GetSelectedOption = GetSelectedOption || {};
var GetSelectedOption = {
    user:null,
    selectedOption:null,
    
    getSelected :function(){
        return GetSelectedOption.selectedOption;
    },
    
    setSelected:function(selectedId){
        GetSelectedOption.selectedOption=selectedId;
    },
    
    getSelecteduser:function(){
        //return "Jeetendra";
        if(GetSelectedOption.user) {
            return GetSelectedOption.user;   
        } else {
            return false;
        }
        
    },
    setSelecteduser:function(user){
        GetSelectedOption.user=user;
        
    }
    
    
 
}
