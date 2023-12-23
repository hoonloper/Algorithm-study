package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Vector;

public class S5_15312 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String first_name = br.readLine();
        String second_name = br.readLine();
        int[] number = {3, 2, 1, 2, 3, 3, 2, 3, 3, 2, 2, 1, 2, 2, 1, 2, 2, 2, 1, 2, 1, 1, 1, 2, 2, 1}; //대문자 획순
        Vector<Integer> totalNum = new Vector<>();
        Vector<Integer> temp = new Vector<>();

        if(first_name.length()<2 || first_name.length()>2000) System.exit(0);

        for(int i=0; i<first_name.length(); i++) {
            char first = first_name.charAt(i);
            char second = second_name.charAt(i);
            totalNum.add(number[first-'A']);
            totalNum.add(number[second-'A']);
        }

        while(totalNum.size()>2) {
            int sum;
            for(int i=0; i<totalNum.size()-1; i++) {
                sum = (totalNum.get(i)+totalNum.get(i+1)) % 10;
                temp.add(sum);
            }
            totalNum.removeAllElements();
            totalNum.addAll(temp);
            temp.removeAllElements();
        }
        System.out.println(totalNum.get(0)+""+totalNum.get(1));
    }
}
