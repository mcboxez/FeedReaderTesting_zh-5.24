/*新增suite*/
describe('RSS Feeds', function() {
   
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* 
        * 编写一个测试遍历 allFeeds 对象里面的所有的源来保证有链接字段而且链接不是空的。
        */
        it('url of every feed should not null',function() {
            allFeeds.forEach(function(item) {
                expect(item.url).not.toBeNull();
            });
        })

        /* 
        * 编写一个测试遍历 allFeeds 对象里面的所有的源来保证有名字字段而且不是空的。
        */ 
        it('name of every feed should not null',function() {
            allFeeds.forEach(function(item) {
                expect(item.name).not.toBeNull();
            });
        })

    });