package org.example.level1;

import java.util.ArrayList;
import java.util.List;

public class 햄버거만들기 {
    public int solution(int[] ingredient) {
        List<Integer> stack = new ArrayList<>();
        int count = 0;
        for (int i = 0; i < ingredient.length; i++) {
            stack.add(ingredient[i]);
            int size = stack.size();
            if(size >= 4 &&
                    stack.get(size - 4) == 1 &&
                    stack.get(size - 3) == 2 &&
                    stack.get(size - 2) == 3 &&
                    stack.get(size - 1) == 1) {
                stack.remove(size - 1);
                stack.remove(size - 2);
                stack.remove(size - 3);
                stack.remove(size - 4);
                count++;
            }
        }
        return count;
    }
}
