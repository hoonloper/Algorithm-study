package org.example.level0;

public class 저주의숫자3 {
    public static void main(String[] args) {
        solution(15);
    }

    private static void solution(int n) {
        int num = 0;
        for(int i = 1; i <= n; i++) {
            num++;
            boolean flag = (num + "").contains("3") || num % 3 == 0;
            while(flag) {
                num++;
                flag =  (num + "").contains("3") || num % 3 == 0;
            }
        }
        System.out.println(num);
    }
}
