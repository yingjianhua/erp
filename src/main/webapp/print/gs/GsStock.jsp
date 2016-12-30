<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="irille.pub.print.GenXmlData"%>
<%@page import="irille.pub.idu.Idu"%>
<%@page import="irille.pub.bean.BeanBase"%>
<%@page import="java.util.List"%>
<%@page import="irille.pub.svr.DbPool"%>
<%@page import="irille.gl.gs.GsStock"%>
<%@page import="irille.gl.gs.GsStockLine"%>
<%
try {
String mainFlds[] = {"warehouse","goods.spec"};
String linesFlds[] = {"gsForm","name","gsFormNum","origForm","origFormNum","gsQty","gsTime","qty"};
GsStock mainGsStock=BeanBase.load(GsStock.class,request.getParameter("pkey"));
String pkey = request.getParameter("pkey");
String startDate = request.getParameter("startDate");
String endDate = request.getParameter("endDate");
String where = "stock = ?";
List<GsStockLine> listGsStockLine;
if(!startDate.isEmpty()){
	where += " and DATE(gs_time) >= '" + startDate + "'";
}
if(!endDate.isEmpty()){
	where += " and DATE(gs_time) <= '" + endDate + "'";
}
listGsStockLine = BeanBase.list(GsStockLine.class, where,false,mainGsStock.getPkey());
GenXmlData.GenParameterXmlData(response,mainGsStock,listGsStockLine,mainFlds,linesFlds);
} finally {
DbPool.getInstance().removeConn();
	}
%>
