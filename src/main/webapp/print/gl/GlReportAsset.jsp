<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@page import="irille.pub.print.GenXmlData"%>
<%@page import="irille.pub.idu.Idu"%>
<%@page import="irille.pub.bean.BeanBase"%>
<%@page import="java.util.List"%>
<%@page import="irille.gl.gl.GlReportAsset"%>
<%@page import="irille.gl.gl.GlReportAssetLine"%>
<%@page import="irille.pub.svr.DbPool"%>
<%
try {
	String mainFlds[] = {"org","beginDate","endDate","rem","createBy","createTime","rowVersion"};
	String linesFlds[] = {"keyName","keyValue","amtBegin","amtEnd"};
	GlReportAsset mainGlReportAsset=BeanBase.load(GlReportAsset.class,request.getParameter("pkey"));
	List<GlReportAssetLine> listGlReportAssetLine = Idu.getLinesTid(mainGlReportAsset, GlReportAssetLine.class);
	GlReportAssetLine line;
	GlReportAssetLine empty = new GlReportAssetLine();
	empty.setKeyName("     ");
	empty.setKeyValue(null);
	int length = listGlReportAssetLine.size()+2;
	for(int i=0;i<length;i++) {
		line = listGlReportAssetLine.get(i);
		line.setKeyName(line.getKeyName().replaceAll("&nbsp&nbsp&nbsp", " "));//&nbsp会解析出错
		if(line.getKeyValue()!=null&&line.getKeyValue().equals(122)) {
			int index = listGlReportAssetLine.indexOf(line);
			listGlReportAssetLine.add(index+1, empty);
			listGlReportAssetLine.add(index+2, empty);
			i+=2;	
		}
	}
	GenXmlData.GenParameterXmlData(response,mainGlReportAsset,listGlReportAssetLine,mainFlds,linesFlds);
} finally {
	DbPool.getInstance().removeConn();
}
%>
