package com.cps530_api.cps530;



import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class PageDataService {
    private static Map<Long, PageData> pageDataMap = new HashMap<>();
    private static Long index = 2L;

    static {
        PageData pageOne = new PageData(1L,"React is a declarative, efficient, and flexible JavaScript library " +
                "for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called components." +

                "                                                     React allows big complex tasks to be broken down into components. This makes the development process easier and work can be split between developers.",1);
        pageDataMap.put(1L,pageOne);
    }

    public static List<PageData> getPageOneData() {
        return new ArrayList<>(pageDataMap.values());
    }
}