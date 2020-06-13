<template>
    <div class="code-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="error">
                        <span class="comment">// 404 - page not found</span>
                        <span>
                            <span class="red">if</span>(<span class="light-blue">!</span><span class="light italic">found</span>) {
                        </span>
                        <span>
                            <span class="indent blue">throw</span><span>(<span class="yellow">"(╯°□°)╯︵ ┻━┻"</span>);</span>
                        </span>
                        <span>}</span>
                        <br>
                        <br>
                        <a href="/">
                            <button class="btn not-found-button">Go Back</button>
                        </a>                          
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
     html {
        font-size: 16px;
    }
    html, body {
        width: 100%;
        height: 100%;
    }
    body {
        margin: 0;
        background-color: #081421;
        color: #d3d7de;
        font-family: "Liberation Mono",SFMono-Regular,Consolas,Menlo,Courier,monospace;
        font-size: 1.125rem;
        line-height: 1.5em;
        cursor: default;
    }   
</style>