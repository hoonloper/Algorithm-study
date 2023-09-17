package org.example.boj;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class S1_2002 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int result=0;
        int N=Integer.parseInt(br.readLine());

        String in[]=new String[N];
        String out[]=new String[N];
        boolean check[]=new boolean[N];
        for(int i=0; i<N; i++) {
            in[i]=br.readLine();
        }
        for(int i=0; i<N; i++) {
            out[i]=br.readLine();
        }

        for(int i=0; i<N; i++) {
            String carNumber=in[i];
            for(int j=0; j<N; j++) {
                if(out[j].equals(carNumber)) {
                    check[j]=true;
                    break;
                }
                if(check[j]) continue;
                result++;
                check[j]=true;
            }
        }

        System.out.println(result);

    }
}
