

const ADD_HISTORY = 'ADD_HISTORY';
const SAVE_CONFIG = 'SAVE_CONFIG';
const SAVE_EDIT = 'SAVE_EDIT';



const mutations={
	[ADD_HISTORY] (state,editData){
		let hisData =JSON.parse(localStorage.getItem('historyList'))
		if(!hisData){
			state.historyList.push(editData);
			window.localStorage.setItem('historyList',JSON.stringify(state.historyList))
		}else{
			hisData.push(editData);
			window.localStorage.setItem('historyList',JSON.stringify(hisData))
		}
		state.historyList = JSON.parse(localStorage.getItem('historyList'))
	},
	
	[SAVE_CONFIG] (state,editData){
		let Data =JSON.parse(localStorage.getItem('dataList'))
		if(!Data){
				state.dataList.forEach( (item,index) => {
					
					if(editData.index===index+1){
						
						item=editData;
					}
				})
				window.localStorage.setItem('dataList',JSON.stringify(state.dataList));
			}else{
					
				Data[editData.index]=editData;
				window.localStorage.setItem('dataList',JSON.stringify(Data));
			}
			
			state.dataList = JSON.parse(localStorage.getItem('dataList'))
	},
	
	[SAVE_EDIT] (state,editData){ //保存编辑后的数据
		state.editData = editData;
	},
	
}

export default mutations




