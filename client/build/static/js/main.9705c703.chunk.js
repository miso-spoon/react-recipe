(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(20),l=a.n(c),r=(a(59),a(130)),s=a(133),o=a(132),u=a(12),d=a(3),h=a(4),p=a(6),m=a(5),f=a(7),g=a(13),v=a.n(g),E={getRecipes:function(){return v.a.get("/api/recipe")},getRecipe:function(e){return v.a.get("/api/recipe/"+e)},deleteRecipe:function(e){return v.a.delete("/api/recipe/"+e)},saveRecipe:function(e){return v.a.post("/api/recipe",e)},updateRecipe:function(e,t){return v.a.put("/api/recipe/"+e,t)}},b=function(e){return i.a.createElement("div",{className:"form-group"},i.a.createElement("input",Object.assign({className:"form-control"},e)))},y=function(e){return i.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)},C=(a(80),a(82),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={i:a.props.i,left:[],right:[]},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){this.setState({left:this.state.i.slice(0,this.state.i.length/2),right:this.state.i.slice(this.state.i.length/2,this.state.i.length)})}},{key:"render",value:function(){return i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"ingredients"},i.a.createElement("ul",{class:"icon1"},this.state.right.map(function(e){return i.a.createElement("li",{class:"li-s"},i.a.createElement("i",{class:"fas fa-plus"}),e)}))),i.a.createElement("div",{class:"ingredients"},i.a.createElement("ul",{class:"icon2"},this.state.left.map(function(e){return i.a.createElement("li",{class:"li-s"},i.a.createElement("i",{class:"fas fa-plus"}),e)}))))}}]),t}(n.Component)),j=(a(84),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={recipe:a.props.recipe},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){console.log(this.state.recipe._id)}},{key:"render",value:function(){return i.a.createElement("div",{class:"detail-container"},i.a.createElement("div",{class:"ing-row"},i.a.createElement("h4",{class:"ingredients-title"},"Ingredients:"),i.a.createElement("div",{class:"detail-container"},i.a.createElement(C,{i:this.state.recipe.ingredientList}))),i.a.createElement("div",{class:"attr-row"},i.a.createElement("div",{class:"row-title"},i.a.createElement("i",{class:"fas fa-clock"}),this.state.recipe.cookTime),i.a.createElement("div",{class:"row-title"},i.a.createElement("i",{class:"fa fa-exclamation-triangle"}),this.state.recipe.difficulty),i.a.createElement("div",{class:"row-title"},i.a.createElement("i",{class:"fas fa-hamburger"}),this.state.recipe.servings)),i.a.createElement("hr",null),i.a.createElement("div",{class:"instruction-container"},i.a.createElement("div",{class:"title-container"},i.a.createElement("h3",{class:"instruction-title"},"Instructions:")),i.a.createElement("div",{class:"instructions"},i.a.createElement("ol",{class:"in"},this.state.recipe.instructions.map(function(e){return i.a.createElement("div",{class:"instruction"},i.a.createElement("li",null,e))})))))}}]),t}(n.Component)),O=(a(35),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={recipe:{},id:"",title:"",cookTime:"",difficulty:"",servings:"",ingredientList:"",instructions:"",file:null,selectedFile:null},a.fileSelectedHandler=function(e){var t=URL.createObjectURL(e.target.files[0]);console.log(typeof e.target.files[0]),console.log(e.target.files[0]),a.setState({file:t,selectedFile:e.target.files[0]})},a.handleInputChange=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(u.a)({},n,i))},a.handleFormSubmit=function(e){e.preventDefault(),E.updateRecipe(a.state.id,{title:a.state.title,cookTime:a.state.cookTime,difficulty:a.state.difficulty,servings:a.state.servings,ingredientList:a.state.ingredientList.split(","),instructions:a.state.instructions.split("\n"),imgUrl:a.state.file,img:a.state.selectedFile}).catch(function(e){return console.log(e)}),a.props.history.push("/")},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentWillMount",value:function(){var e=this,t=window.location.href.slice(window.location.href.length-24,window.location.href.length);E.getRecipe(t).then(function(a){return e.setState({id:t,recipe:a.data,title:a.data.title,cookTime:a.data.cookTime,difficulty:a.data.difficulty,servings:a.data.servings,ingredientList:a.data.ingredientList.join(","),instructions:a.data.instructions.join("\n"),file:a.data.imgUrl,selectedFile:a.data.img})})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{class:"form-container"},i.a.createElement("h4",null,"Edit Recipe:"),i.a.createElement("form",null,i.a.createElement(b,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Title (required)"}),i.a.createElement(b,{value:this.state.cookTime,onChange:this.handleInputChange,name:"cookTime",placeholder:"Cook Time (required)"}),i.a.createElement(b,{value:this.state.difficulty,onChange:this.handleInputChange,name:"difficulty",placeholder:"Difficulty"}),i.a.createElement(b,{value:this.state.servings,onChange:this.handleInputChange,name:"servings",placeholder:"Servings"}),i.a.createElement("textarea",{class:"ing-text",value:this.state.ingredientList,onChange:this.handleInputChange,name:"ingredientList",placeholder:"Ingredients (Separate each with a comma)"}),i.a.createElement("textarea",{class:"ins-text",value:this.state.instructions,onChange:this.handleInputChange,name:"instructions",placeholder:"Instructions (Separate each with a new line!)"}),i.a.createElement("button",{type:"button",class:"btn btn-danger",onClick:function(){e.props.history.push("/")}},i.a.createElement("i",{class:"fas fa-arrow-left"})),i.a.createElement(y,{onClick:this.handleFormSubmit},"Submit Recipe")))}}]),t}(n.Component)),w=(a(87),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={pic:a.props.pic},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return null===this.state.pic||"null"===this.state.pic?i.a.createElement("img",{class:"thumbnail",src:"/img/default-recipe-big.png"}):i.a.createElement("img",{class:"thumbnail",src:this.state.pic})}}]),t}(n.Component)),k=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={recipe:a.props.recipe,edit:!1},a.handleEdit=function(){a.setState(function(){return{edit:!0}})},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t="collapse"+this.state.recipe._id,a="#collapse"+this.state.recipe._id;return i.a.createElement("div",{class:"accordion",id:"accordionExample"},i.a.createElement("div",{class:"card"},i.a.createElement("div",null,i.a.createElement("div",{class:"card-header",id:"headingOne"},i.a.createElement("div",{class:"row"},i.a.createElement("div",{class:"desc"},i.a.createElement(w,{pic:this.state.recipe.imgUrl})),i.a.createElement("h4",{class:"mb-0"},i.a.createElement("button",{class:"btn btn-link collapsed title",type:"button","data-toggle":"collapse","data-target":a,"aria-expanded":"false","aria-controls":t},this.state.recipe.title)),i.a.createElement("div",{class:"button-column"},i.a.createElement("div",{class:"button-row"},i.a.createElement("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:function(){E.deleteRecipe(e.state.recipe._id)}},i.a.createElement("i",{class:"far fa-times-circle"})),i.a.createElement("button",{type:"button",class:"btn btn-outline-primary btn-sm",onClick:this.handleEdit},i.a.createElement("i",{class:"far fa-edit"})))))),i.a.createElement("div",{id:t,class:"collapse","aria-labelledby":"headingOne","data-parent":"#accordionExample"},i.a.createElement("div",{class:"card-body"},i.a.createElement(j,{recipe:this.state.recipe}))))))}}]),t}(n.Component),S=(a(89),function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={recipes:[]},a.loadRecipes=function(){E.getRecipes().then(function(e){return a.setState({recipes:e.data})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(u.a)({},n,i))},a.handleCreate=function(){a.props.history.push("/add")},a.deleteRecipe=function(e){E.deleteRecipe(e),a.setState({recipes:a.state.recipes.filter(function(t){return t._id!==e})})},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadRecipes()}},{key:"render",value:function(){return i.a.createElement("div",{class:"app-container"},i.a.createElement("div",{class:"card-container"},this.state.recipes.map(function(e){return i.a.createElement(k,{recipe:e})})),i.a.createElement("div",{class:"card"},i.a.createElement("div",{class:"card-header"},i.a.createElement("h4",{class:"mb-1"},i.a.createElement("button",{class:"btn btn-link title",type:"button",onClick:this.handleCreate},"+ Add New recipe")))))}}]),t}(n.Component)),R=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,i=new Array(n),c=0;c<n;c++)i[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={recipes:[],title:"",cookTime:"",difficulty:"",servings:"",ingredientList:"",instructions:"",file:null,fileSelected:null},a.fileSelectedHandler=function(e){var t=URL.createObjectURL(e.target.files[0]);a.setState({fileSelected:e.target.files[0],file:t})},a.handleInputChange=function(e){var t=e.target,n=t.name,i=t.value;a.setState(Object(u.a)({},n,i))},a.handleFormSubmit=function(e){e.preventDefault(),E.saveRecipe({title:a.state.title,cookTime:a.state.cookTime,difficulty:a.state.difficulty,servings:a.state.servings,ingredientList:a.state.ingredientList.split(","),instructions:a.state.instructions.split("\n"),imgUrl:a.state.file,img:a.state.selectedFile}).then(function(e){return a.loadRecipes()}).catch(function(e){return console.log(e)}),a.props.history.push("/")},a}return Object(f.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{class:"form-container"},i.a.createElement("h4",null,"New Recipe:"),i.a.createElement("form",null,i.a.createElement(b,{value:this.state.title,onChange:this.handleInputChange,name:"title",placeholder:"Title (required)"}),i.a.createElement(b,{value:this.state.cookTime,onChange:this.handleInputChange,name:"cookTime",placeholder:"Cook Time (required)"}),i.a.createElement(b,{value:this.state.difficulty,onChange:this.handleInputChange,name:"difficulty",placeholder:"Difficulty"}),i.a.createElement(b,{value:this.state.servings,onChange:this.handleInputChange,name:"servings",placeholder:"Servings"}),i.a.createElement("textarea",{class:"ing-text",value:this.state.ingredientList,onChange:this.handleInputChange,name:"ingredientList",placeholder:"Ingredients (Separate each with a comma)"}),i.a.createElement("textarea",{class:"ins-text",value:this.state.instructions,onChange:this.handleInputChange,name:"instructions",placeholder:"Instructions (Separate each with a new line!)"}),i.a.createElement("button",{type:"button",class:"btn btn-danger",value:"Upload",onClick:function(){e.props.history.push("/")}},i.a.createElement("i",{class:"fas fa-arrow-left"})),i.a.createElement(y,{onClick:this.handleFormSubmit},"Submit Recipe")))}}]),t}(n.Component),I=(a(91),a(131)),x=function(){return i.a.createElement(r.a,null,i.a.createElement("div",null,i.a.createElement(I.a,null),i.a.createElement(s.a,null,i.a.createElement(o.a,{exact:!0,path:"/",component:S}),i.a.createElement(o.a,{exact:!0,path:"/recipe",component:S}),i.a.createElement(o.a,{exact:!0,path:"/add",component:R}),i.a.createElement(o.a,{exact:!0,path:"/edit/:id",component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(127);l.a.render(i.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},35:function(e,t,a){},53:function(e,t,a){e.exports=a(129)},59:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){}},[[53,2,1]]]);
//# sourceMappingURL=main.9705c703.chunk.js.map