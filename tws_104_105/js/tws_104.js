let Score=function ()
    {
        var answer1=["统一建模语言","封装性","继承性","多态性","模型是对现实世界的简化和抽象，模型是对所研究的系统、过程、事物或概念的一种表达形式。可以是物理实体；可以是某种图形；或者是一种数学表达式。"];
        var answer_score=0;
        var Blank1=document.getElementById("part1");
        if( Blank1.value=== answer1[0])
        {
            answer_score+=5;
        }
        var Blank2=document.getElementsByName("part2");
        for (var answer in answer1)
        {
            for(var item in Blank2)
            {
                if(item.value === answer)
                {
                    answer_score+=5;
                }
            }
        }
        var Choice1=document.getElementsByName("answer5");
        for (var choice of Choice1)
        {
            if (choice.checked)
            {
                answer_score += parseInt(choice.value);
            }
        }
        var Choice2=document.getElementsByName("answer6");
        for (var choice in Choice2)
        {
            if (choice.checked)
            {
                answer_score += parseInt(choice.value);
            }
        }
        var multiple1=document.getElementsByName("answer7");
        var count_score=0;
        for(var choice in multiple1)
        {
            if(choice.checked)
            {
                count_score+=parseInt(choice.value);
            }
        }
        if (count_score === 3)
        {
            answer_score += 10;
        }
        var multiple2=document.getElementsByName("answer8");
        count_score=0;
        for(var choice in multiple2)
        {
            if(choice.checked)
            {
                count_score+=parseInt(choice.value);
            }
        }
        if (count_score === 3)
        {
            answer_score += 10;
        }
        var judgment1=document.getElementsByName("answer9");
        for (var choice in judgment1)
        {
            if (choice.checked)
            {
                answer_score += parseInt(choice.value);
            }
        }
        var judgment2=document.getElementsByName("answer10");
        for (var choice in judgment2)
        {
            if (choice.checked)
            {
                answer_score += parseInt(choice.value);
            }
        }
        for (var choice in judgment2)
            short_answer=document.getElementById("part11");
        if(answer1[4]===short_answer.value)
        {
            answer_score+=20;
        }
        for (var choice in judgment2)
            information="Class："+document.getElementById("classname").value+"<br>"+"ID："+document.getElementById("studentid").value+"<br>"+"Name："+document.getElementById("studentname").value;
        document.write(information+"<br>"+"Score："+answer_score);
    }
