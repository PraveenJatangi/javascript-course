public class Main{

    public static void main (String[] args){
  for(int i=0; i<5;i++){
    StringBuilder row = new StringBuilder();
    for (char ch='A';ch<='A'+(2*i);ch++){
        row.append(ch); 
   //System.out.print(ch);
    }
    System.out.println(row);
  }
    }
}