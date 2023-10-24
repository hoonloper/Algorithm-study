package org.example.boj.silver;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class S4_3048 {
    static String str1, str2;
    static ArrayList<Po> arrList = new ArrayList<>();
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N1,N2;
        StringTokenizer st = new StringTokenizer(br.readLine());
        N1 = Integer.parseInt(st.nextToken());
        N2 = Integer.parseInt(st.nextToken());

        str1 = br.readLine();

        for(int i=str1.length()-1; i>=0; i--)
            arrList.add(new Po(str1.charAt(i), 1));

        str2 = br.readLine();

        for(int i=0; i<str2.length(); i++)
            arrList.add(new Po(str2.charAt(i), 2));

        int time = Integer.parseInt(br.readLine());

        while(time-- > 0) {
            for(int i=0; i<arrList.size()-1; i++) {
                Po current = arrList.get(i);
                Po next = arrList.get(i+1);
                if(current.num != 2 && current.num != next.num) {
                    arrList.set(i, next);
                    arrList.set(i+1, current);
                    i++;
                }
            }
        }
        for(int i=0; i<arrList.size(); i++)
            System.out.print(arrList.get(i).ch);
    }
    public static class Po{
        char ch;
        int num;
        public Po(char ch, int n) {
            this.ch=ch;
            this.num=n;
        }
    }
}
